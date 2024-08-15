import { PollRoundDTO } from "../dao/PollRoundDTO";
import { VenueDTO } from "../dao/VenueDTO";

export interface IRoundRepository {
    create(pollId: string, venues: VenueDTO[], chosenVenues: VenueDTO[], roundNumber: number): Promise<any>
}