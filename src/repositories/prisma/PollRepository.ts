import { PrismaClient } from "@prisma/client";
import { VenueDTO } from "../../dao/VenueDTO";
import { IPollRepository } from "../IPollRepository";
import { PollDTO } from "../../dao/PollDTO";

const prisma = new PrismaClient();

export class PollRepository implements IPollRepository {
    async create(participants: string[], venues: VenueDTO[]): Promise<boolean> {
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

            const poll = await prisma.poll.create({
                data: {
                    closed: false,
                    winnerVenueId: '',
                    users: {
                        connect: participants.map(participant => ({id: participant})) || []
                    }
                }
            })
            const pollRound = await prisma.pollRound.create({
                data: {
                    roundNumber: 0,
                    pollId: poll.id,
                    venuesOnPollRound: {
                        create: venues.map(venue => ({chosen: false, venue: {connect: {id: venue.id}}}))
                    }
                },
                
            })

            if (pollRound) {
                return true
            }

            return false;
    }

    async getByUserId(userId: string): Promise<PollDTO[]> {
        return await prisma.poll.findMany({
            where: {
                users: {
                    some: {
                        id: { equals: userId}
                    }
                }
            },
            include: { users: true }
        }) || []
    }
}