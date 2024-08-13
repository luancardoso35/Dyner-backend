import { VoteRepository } from "../../repositories/prisma/VoteRepository";

class GetUserVoteOnRoundService {
    constructor(private voteRepository: VoteRepository) {}

    async execute(roundId: string, userId: string) {
        const response = await this.voteRepository.getUserVoteInRound(roundId, userId);
        return response;
    }
}

export { GetUserVoteOnRoundService };