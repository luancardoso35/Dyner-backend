import { UserRepository } from "../../repositories/prisma/UserRepository";

class SearchUserService {
    constructor(private userRepository: UserRepository) {}

    async execute(name: string, username: string) {
        const users = await this.userRepository.getByName(name, username);
        return users
    }
}

export { SearchUserService }