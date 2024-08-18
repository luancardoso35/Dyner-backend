import { UserRepository } from "../../repositories/prisma/UserRepository"
import { ResetPasswordController } from "./ResetPasswordController"
import { ResetPasswordService } from "./ResetPasswordService"

export const resetPasswordFactory = () => {
    const userRepository = new UserRepository()
    const resetPasswordService = new ResetPasswordService(userRepository)
    const resetPasswordController = new ResetPasswordController(resetPasswordService)
    return resetPasswordController
}