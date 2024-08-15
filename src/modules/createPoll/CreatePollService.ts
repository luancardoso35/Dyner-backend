import { VenueDTO } from "../../dao/VenueDTO";
import { PollRepository } from "../../repositories/prisma/PollRepository";
import { UserRepository } from "../../repositories/prisma/UserRepository";

class CreatePollService {
    constructor(private pollRepository: PollRepository, private userRepository: UserRepository) {}

    async execute(participants: string[], venues: VenueDTO[]) {
        const poll = await this.pollRepository.create(participants, venues);
        const usersInPoll = await this.userRepository.getByIds(participants)
        return {...poll, users: usersInPoll};
    }
}

export { CreatePollService };