import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository";

class GetAllRequestedPeopleService {
    constructor(private friendRequestRepository: FriendRequestRepository) {}

    async execute(userId: string) {
        const response = await this.friendRequestRepository.getAllRequestedPeopleById(userId);
        return response;
    }
}

export { GetAllRequestedPeopleService };