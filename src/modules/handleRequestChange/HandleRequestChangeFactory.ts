import { FriendRequestRepository } from "../../repositories/prisma/FriendRequestRepository"
import { HandleRequestChangeController } from "./HandleRequestChangeController";
import { HandleRequestChangeService } from "./HandleRequestChangeService";

export const handleRequestChangeFactory = () => {
    const friendRequestRepository = new FriendRequestRepository()
    const handleRequestChangeService = new HandleRequestChangeService(friendRequestRepository)
    const handleRequestChangeController = new HandleRequestChangeController(handleRequestChangeService)
    return handleRequestChangeController
}