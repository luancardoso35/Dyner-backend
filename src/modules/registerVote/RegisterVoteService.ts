import { VenueDTO } from "../../dao/VenueDTO";
import { VoteRepository } from "../../repositories/prisma/VoteRepository";

class RegisterVoteService {
    constructor(private voteRepository: VoteRepository) {}

    async execute(roundId: string, places: VenueDTO[], userId: string){
        const response = await this.voteRepository.create(roundId, places, userId);
        return response;
    }
}

export { RegisterVoteService };