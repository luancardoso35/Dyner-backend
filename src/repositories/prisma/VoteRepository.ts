import { PrismaClient, Vote } from "@prisma/client";
import { VenueDTO } from "../../dao/VenueDTO";
import { VoteDTO } from "../../dao/VoteDTO";
import { IVoteRepository } from "../IVoteRepository";

const prisma = new PrismaClient();

export class VoteRepository implements IVoteRepository {
    async create(roundId: string, chosenVenues: VenueDTO[], userId: string): Promise<boolean> {
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

        
        return vote ? true : false; 
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
}