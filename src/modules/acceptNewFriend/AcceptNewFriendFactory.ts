import { UserRepository } from "../../repositories/prisma/UserRepository"
import { AcceptNewFriendController } from "./AcceptNewFriendController"
import { AcceptNewFriendService } from "./AcceptNewFriendService"

export const acceptNewFriendFactory = () => {
    const userRepository = new UserRepository()
    const acceptNewFriendService = new AcceptNewFriendService(userRepository)
    const acceptNewFriendController = new AcceptNewFriendController(acceptNewFriendService)
    return acceptNewFriendController
}