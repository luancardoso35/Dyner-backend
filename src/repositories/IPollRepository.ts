import { PollDTO } from "../dao/PollDTO";
import { VenueDTO } from "../dao/VenueDTO";

export interface IPollRepository {
    create(participants: string[], venues: VenueDTO[]): Promise<PollDTO | null>
    getByUserId(userId: string): Promise<PollDTO[]>
    getParticipants(pollId: string): Promise<number>
    setWinner(pollId: string, placeId: string): Promise<PollDTO>;
}