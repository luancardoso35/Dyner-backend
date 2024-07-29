import { UserRepository } from "../../repositories/prisma/UserRepository"
import { SearchUserController } from "./SearchUserController";
import { SearchUserService } from "./SearchUserService";

export const searchUserFactory = () => {
    const userRepository = new UserRepository();
    const searchUserService = new SearchUserService(userRepository)
    const searchUserController = new SearchUserController(searchUserService)
    return searchUserController
}