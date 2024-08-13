import { VoteRepository } from "../../repositories/prisma/VoteRepository"
import { RegisterVoteController } from "./RegisterVoteController";
import { RegisterVoteService } from "./RegisterVoteService";

export const registerVoteFactory = () => {
    const voteRepository = new VoteRepository();
    const registerVoteService = new RegisterVoteService(voteRepository);
    const registerVoteController = new RegisterVoteController(registerVoteService)
    return registerVoteController
}