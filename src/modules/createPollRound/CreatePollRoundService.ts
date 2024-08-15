import { UserDTO } from "../../dao/UserDTO";
import { VenueDTO } from "../../dao/VenueDTO";
import { PollRepository } from "../../repositories/prisma/PollRepository";
import { RoundRepository } from "../../repositories/prisma/RoundRepository";

class CreatePollRoundService {
    constructor(private pollRoundRepository: RoundRepository) {}

    async execute(pollId: string, venues: VenueDTO[]): Promise<boolean>{
        const response = await this.pollRoundRepository.create(pollId, venues);
        return response;
    }
}

export { CreatePollRoundService };