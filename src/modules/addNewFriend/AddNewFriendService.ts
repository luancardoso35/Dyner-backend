import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository";
import { UserRepository } from "../../repositories/prisma/UserRepository";

class AddNewFriendService {
    constructor(private friendRequestRepository: FriendRequestRepository) {}

    async execute(firstUserId: string, secondUserId: string) {
        const response = await this.friendRequestRepository.addFriendRequest(firstUserId, secondUserId);
        return response;
    }
}

export { AddNewFriendService };