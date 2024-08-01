import { UserRepository } from "../../repositories/prisma/UserRepository";

class AcceptNewFriendService {
    constructor(private userRepository: UserRepository) {}

    async execute(newFriendId: string, userId: string) {
        const response = await this.userRepository.addFriend(newFriendId, userId);
        return response;
    }
}

export { AcceptNewFriendService };