import { VoteRepository } from "../../repositories/prisma/VoteRepository"
import { GetUserVoteOnRoundController } from "./GetUserVoteOnRoundController";
import { GetUserVoteOnRoundService } from "./GetUserVoteOnRoundService";

export const getUserVoteOnRoundFactory = () => {
    const voteRepository = new VoteRepository();
    const getUserVoteOnRoundService = new GetUserVoteOnRoundService(voteRepository)
    const getUserVoteOnRoundController = new GetUserVoteOnRoundController(getUserVoteOnRoundService)
    return getUserVoteOnRoundController
}