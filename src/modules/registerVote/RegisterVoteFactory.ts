import { PollRepository } from "../../repositories/prisma/PollRepository";
import { RoundRepository } from "../../repositories/prisma/RoundRepository";
import { VenueRepository } from "../../repositories/prisma/VenueRepository";
import { VoteRepository } from "../../repositories/prisma/VoteRepository"
import { CreatePollRoundService } from "../createPollRound/CreatePollRoundService";
import { GetChosenPlacesFromRoundService } from "../getChosenPlacesFromRound/GetChosenPlacesFromRoundService";
import { RegisterVoteController } from "./RegisterVoteController";
import { RegisterVoteService } from "./RegisterVoteService";

export const registerVoteFactory = () => {
    const voteRepository = new VoteRepository();
    const roundRepository = new RoundRepository();
    const pollRepository = new PollRepository();
    const venueRepository = new VenueRepository();
    const createPollRoundService = new CreatePollRoundService(roundRepository);
    const getChosenPlacesFromRoundService = new GetChosenPlacesFromRoundService(voteRepository)
    const registerVoteService = new RegisterVoteService(voteRepository, roundRepository, pollRepository, venueRepository, createPollRoundService, getChosenPlacesFromRoundService);
    const registerVoteController = new RegisterVoteController(registerVoteService)
    return registerVoteController
}