import { VenueDTO } from "../dao/VenueDTO";
import { VoteDTO } from "../dao/VoteDTO";

export interface IVoteRepository {
    create(roundId: string, chosenVenues: VenueDTO[], userId: string): Promise<{
        id: string;
        roundId: string;
        userId: string;
        votedOn: Date;
    }>
    getUserVoteInRound(roundId: string, userId: string): Promise<VoteDTO | null>
    countByRoundId(roundId: string): Promise<number>
    getAllVotesInRound(roundId: string): Promise<{venuesOnVote: {venueId: string, voteId: string}[]}[]>
}