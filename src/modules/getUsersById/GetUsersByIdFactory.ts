import { UserRepository } from "../../repositories/prisma/UserRepository"
import { GetUsersController } from "./GetUsersByIdController"
import { GetUsersService } from "./GetUsersByIdService"

export const getUsersFactory = () => {
    const userRepository = new UserRepository()
    const getUsersService = new GetUsersService(userRepository)
    const getUsersController = new GetUsersController(getUsersService)
    return getUsersController
}