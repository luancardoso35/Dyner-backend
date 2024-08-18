import { UserRepository } from "../../repositories/prisma/UserRepository"
import { GetUserByEmailService } from "../getUserByEmail/GetUserByEmailService"
import { ForgotPasswordController } from "./ForgotPasswordController"
import { ForgotPasswordService } from "./ForgotPasswordService"

export const forgotPasswordFactory = () => {
    const userRepository = new UserRepository()
    const getUserByEmailService = new GetUserByEmailService(userRepository)
    const forgotPasswordService = new ForgotPasswordService(getUserByEmailService)
    const forgotPasswordController = new ForgotPasswordController(forgotPasswordService)
    return forgotPasswordController
}