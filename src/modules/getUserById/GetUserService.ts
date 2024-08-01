import { UserRepository } from "../../repositories/prisma/UserRepository";

class GetUserService {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: string) {
        const response = await this.userRepository.getById(userId);
        return response;
    }
}

export { GetUserService };