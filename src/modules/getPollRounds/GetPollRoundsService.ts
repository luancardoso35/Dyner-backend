import { RoundRepository } from "../../repositories/prisma/RoundRepository";

class GetPollRoundsService {
    constructor(private roundRepository: RoundRepository) {}

    async execute(id: string) {
        const response = await this.roundRepository.getRoundsByPollId(id);
        return response;
    }
}

export { GetPollRoundsService };