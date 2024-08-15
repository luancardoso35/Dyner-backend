import { PollDTO } from "../../dao/PollDTO";
import { PollRoundDTO } from "../../dao/PollRoundDTO";
import { VenueDTO } from "../../dao/VenueDTO";
import { PollRepository } from "../../repositories/prisma/PollRepository";
import { RoundRepository } from "../../repositories/prisma/RoundRepository";
import { VenueRepository } from "../../repositories/prisma/VenueRepository";
import { VoteRepository } from "../../repositories/prisma/VoteRepository";
import { CreatePollRoundService } from "../createPollRound/CreatePollRoundService";
import { GetChosenPlacesFromRoundService } from "../getChosenPlacesFromRound/GetChosenPlacesFromRoundService";

class RegisterVoteService {
    constructor(
        private voteRepository: VoteRepository,
        private roundRepository: RoundRepository,
        private pollRepository: PollRepository,
        private venueRepository: VenueRepository,
        private createPollRoundService: CreatePollRoundService,
        private getChosenPlacesFromRoundService: GetChosenPlacesFromRoundService,
    ) {}

    async execute(roundId: string, places: VenueDTO[], userId: string) {
        const vote = await this.voteRepository.create(roundId, places, userId);

        if (vote) {
            const pollId = await this.roundRepository.getPollIdByRoundId(roundId);

            if (pollId) {
                const participantsNumber = await this.pollRepository.getParticipants(pollId); 
                const voteNumber = await this.voteRepository.countByRoundId(roundId);

                if (participantsNumber !== voteNumber) {
                    return vote;
                }

                const chosenPlaces = await this.getChosenPlacesFromRoundService.execute(roundId)

                if (chosenPlaces.length > 1) {
                    const places = await this.venueRepository.get(chosenPlaces)
                    await this.createPollRoundService.execute(pollId, places)
                } else if (chosenPlaces.length === 1) {
                    await this.pollRepository.setWinner(pollId, chosenPlaces.length === 1 ? chosenPlaces[0] : '')
                }

                return vote;
            }
        }
    }
}

export { RegisterVoteService };