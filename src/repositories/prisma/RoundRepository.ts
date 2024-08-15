import { PrismaClient } from "@prisma/client";
import { VenueDTO } from "../../dao/VenueDTO";
import { IRoundRepository } from "../IRoundRepository";
import { PollRoundDTO } from "../../dao/PollRoundDTO";

const prisma = new PrismaClient();

export class RoundRepository implements IRoundRepository {
    async create(pollId: string, venues: VenueDTO[]): Promise<any> {
        const venuesPersisted = await prisma.venue.findMany({
            where: {
                id: {
                    in: venues.map(venue => venue.id)
                }
            },
            select: {
                id: true
            }
        })

        const venuesToCreate = venues.filter(({ id: id1 }) => !venuesPersisted.some(({ id: id2 }) => id2 === id1));
        
        await prisma.venue.createMany({
            data:
                venuesToCreate.map(venue => {
                    return (
                        {
                            id: venue.id,
                            name: venue.name,
                            address: venue.address,
                        }
                    )
                })
        })

        const resultRounds = await prisma.pollRound.findMany({
            where: {
                pollId
            },
            select: {
                roundNumber: true
            }
        })
        const lastRounds = resultRounds.map(round => round.roundNumber)
        const lastRoundNumber = lastRounds.reduce((numberOne: number, numberTwo: number) => Math.max(numberOne, numberTwo))

        const newRound = await prisma.pollRound.create({
            data: {
                roundNumber: lastRoundNumber+1,
                pollId: pollId,
                venuesOnPollRound: {
                    create: venues.map(venue => ({chosen: false, venue: {connect: {id: venue.id}}}))
                }
            }
        })
        return newRound;
    }

    async getRoundsByPollId(pollId: string): Promise<any> {
        const rounds = await prisma.pollRound.findMany({
            where: {
                pollId
            },
            include: {venuesOnPollRound: true}
        })
            
        return rounds || []
    }

    async getPollIdByRoundId(roundId: string): Promise<string | null> {
        const pollId = await prisma.pollRound.findFirst({
            where: {
                id: roundId
            },
            select: {
                pollId: true
            }
        })

        return pollId?.pollId ?? null
    }
}