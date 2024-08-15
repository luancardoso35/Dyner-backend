import { PrismaClient, Vote } from "@prisma/client";
import { VenueDTO } from "../../dao/VenueDTO";
import { VoteDTO } from "../../dao/VoteDTO";
import { IVoteRepository } from "../IVoteRepository";

const prisma = new PrismaClient();

export class VoteRepository implements IVoteRepository {
    async create(roundId: string, chosenVenues: VenueDTO[], userId: string): Promise<{
        id: string;
        roundId: string;
        userId: string;
        votedOn: Date;
    }> {
        const vote = await prisma.vote.create({
            data: {
                roundId: roundId,
                userId: userId,
                venuesOnVote: {
                    createMany: {
                        data: chosenVenues.map(venue => {
                            return (
                                {
                                    venueId: venue.id
                                }
                            )
                        })
                    }
                }
            }
        })

        
        return vote; 
    }
    
    async getUserVoteInRound(roundId: string, userId: string): Promise<VoteDTO | null> {
        const vote = await prisma.vote.findFirst({
            where: {
                roundId,
                userId 
            },
            include: { venuesOnVote: true }
        }) as VoteDTO

        return vote ?? null;
    }

    async countByRoundId(roundId: string): Promise<number> {
        return await prisma.vote.count({
            where: {
                roundId
            }
        })
    }

    async getAllVotesInRound(roundId: string): Promise<{venuesOnVote: {venueId: string, voteId: string}[]}[]> {
        return await prisma.vote.findMany({
            where: {
                roundId
            },
            select: {
                venuesOnVote: true
            }
        })
    }
}