import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository"
import { AddNewFriendController } from "./AddNewFriendController"
import { AddNewFriendService } from "./AddNewFriendService"

export const addNewFriendFactory = () => {
    const friendRequestRepository = new FriendRequestRepository()
    const addNewFriendService = new AddNewFriendService(friendRequestRepository)
    const addNewFriendController = new AddNewFriendController(addNewFriendService)
    return addNewFriendController
}