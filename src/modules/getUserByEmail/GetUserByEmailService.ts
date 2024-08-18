import { UserRepository } from "../../repositories/prisma/UserRepository";

class GetUserByEmailService {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string) {
        const response = await this.userRepository.getByEmail(email);
        return response;
    }
}

export { GetUserByEmailService };