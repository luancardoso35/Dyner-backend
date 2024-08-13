import { RoundRepository } from "../../repositories/prisma/RoundRepository";
import { VenueRepository } from "../../repositories/prisma/VenueRepository";

class GetPersistedVenueService {
    constructor(private venueRepository: VenueRepository) {}

    async execute(ids: string[]) {
        const response = await this.venueRepository.get(ids);
        return response;
    }
}

export { GetPersistedVenueService };