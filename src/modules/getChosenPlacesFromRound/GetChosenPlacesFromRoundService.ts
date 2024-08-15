import { VenueDTO } from "../../dao/VenueDTO";
import { RoundRepository } from "../../repositories/prisma/RoundRepository";
import { VoteRepository } from "../../repositories/prisma/VoteRepository";

class GetChosenPlacesFromRoundService {
    constructor(
        private voteRepository: VoteRepository,
    ) {}

    async execute(roundId: string): Promise<string[]>{
        const votes = await this.voteRepository.getAllVotesInRound(roundId)
        const venuesIdsOnVotes = votes.map(vote => vote.venuesOnVote.map((venue: {venueId: string, voteId: string}) => venue.venueId));
        var commons = venuesIdsOnVotes.slice(1).reduce(function(result, currentArray) {
            return currentArray.filter(function(currentItem) {
                return result.indexOf(currentItem) !== -1;
            });
        }, venuesIdsOnVotes[0]);

        return commons
    }
}

export { GetChosenPlacesFromRoundService };