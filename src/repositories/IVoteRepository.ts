import { VenueDTO } from "../dao/VenueDTO";
import { VoteDTO } from "../dao/VoteDTO";

export interface IVoteRepository {
    create(roundId: string, chosenVenues: VenueDTO[], userId: string): Promise<boolean>
    getUserVoteInRound(roundId: string, userId: string): Promise<VoteDTO | null>
}