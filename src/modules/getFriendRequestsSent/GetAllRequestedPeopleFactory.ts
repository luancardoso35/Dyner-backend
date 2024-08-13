import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository"
import { GetAllRequestedPeopleController } from "./GetAllRequestedPeopleController"
import { GetAllRequestedPeopleService } from "./GetAllRequestedPeopleService"

export const getAllRequestedPeopleFactory = () => {
    const friendRequestRepository = new FriendRequestRepository()
    const getFriendRequestsSentService = new GetAllRequestedPeopleService(friendRequestRepository)
    const getFriendRequestsSentController = new GetAllRequestedPeopleController(getFriendRequestsSentService)
    return getFriendRequestsSentController
}