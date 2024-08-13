import { PollDTO } from "../dao/PollDTO";
import { VenueDTO } from "../dao/VenueDTO";

export interface IPollRepository {
    create(participants: string[], venues: VenueDTO[]): Promise<boolean>
    getByUserId(userId: string): Promise<PollDTO[]>
}