import { UserDTO } from "../../dao/UserDTO";
import { VenueDTO } from "../../dao/VenueDTO";
import { PollRepository } from "../../repositories/prisma/PollRepository";

class CreatePollService {
    constructor(private pollRepository: PollRepository) {}

    async execute(participants: string[], venues: VenueDTO[]) {
        const response = await this.pollRepository.create(participants, venues);
        return response;
    }
}

export { CreatePollService };