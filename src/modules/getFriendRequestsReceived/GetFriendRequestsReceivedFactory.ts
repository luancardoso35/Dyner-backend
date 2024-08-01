import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository"
import { GetFriendRequestsReceivedController } from "./GetFriendRequestsReceivedController"
import { GetFriendRequestsReceivedService } from "./GetFriendRequestsReceivedService"

export const getFriendRequestsReceivedFactory = () => {
    const friendRequestRepository = new FriendRequestRepository()
    const getFriendRequestsReceivedService = new GetFriendRequestsReceivedService(friendRequestRepository)
    const getFriendRequestsReceivedController = new GetFriendRequestsReceivedController(getFriendRequestsReceivedService)
    return getFriendRequestsReceivedController
}