import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository";

class GetFriendRequestsReceivedService {
    constructor(private friendRequestRepository: FriendRequestRepository) {}

    async execute(userId: string) {
        const response = await this.friendRequestRepository.getReceivedRequestsByUserId(userId);
        return response;
    }
}

export { GetFriendRequestsReceivedService };