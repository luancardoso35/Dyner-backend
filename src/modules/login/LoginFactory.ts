import { UserRepository } from "../../repositories/prisma/UserRepository"
import { LoginController } from "./LoginController";
import { LoginService } from "./LoginService";

export const loginFactory = () => {
    const userRepository = new UserRepository();
    const loginService = new LoginService(userRepository)
    const loginController = new LoginController(loginService)
    return loginController
}