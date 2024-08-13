import { VenueDTO } from "../dao/VenueDTO";

export interface IVenueRepository {
    create(id: string, name: string, address: string): Promise<string | null | undefined>;
    get(ids: string[]): Promise<VenueDTO[]>
}