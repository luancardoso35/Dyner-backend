import { PrismaClient } from "@prisma/client";
import { VenueDTO } from "../../dao/VenueDTO";
import { IRoundRepository } from "../IRoundRepository";

const prisma = new PrismaClient();

export class RoundRepository implements IRoundRepository {
    async create(pollId: string, venues: VenueDTO[], chosenVenues: VenueDTO[], roundNumber: number): Promise<boolean> {
        return true;
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
}