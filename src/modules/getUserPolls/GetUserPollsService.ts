import { PollRepository } from "../../repositories/prisma/PollRepository";

class GetUserPollsService {
    constructor(private pollRepository: PollRepository) {}

    async execute(id: string) {
        const response = await this.pollRepository.getByUserId(id);
        return response;
    }
}

export { GetUserPollsService };