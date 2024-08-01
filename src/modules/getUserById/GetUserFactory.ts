import { UserRepository } from "../../repositories/prisma/UserRepository"
import { GetUserController } from "./GetUserController"
import { GetUserService } from "./GetUserService"

export const getUserFactory = () => {
    const userRepository = new UserRepository()
    const getUserService = new GetUserService(userRepository)
    const getUserController = new GetUserController(getUserService)
    return getUserController
}