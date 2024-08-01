import { UserRepository } from "../../repositories/prisma/UserRepository";

class GetUsersService {
    constructor(private userRepository: UserRepository) {}

    async execute(ids: string[]) {
        const response = await this.userRepository.getByIds(ids);
        return response;
    }
}

export { GetUsersService };