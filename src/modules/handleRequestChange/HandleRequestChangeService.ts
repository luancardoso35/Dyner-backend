import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository";

class HandleRequestChangeService {
    constructor(private friendRequestRepository: FriendRequestRepository) {}

    async execute(senderId: string, receiverId: string, accepted: boolean) {
        const response = await this.friendRequestRepository.handleFriendRequestChange(senderId, receiverId, accepted);
        return response;
    }
}

export { HandleRequestChangeService };