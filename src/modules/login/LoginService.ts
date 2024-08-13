import { UserRepository } from "../../repositories/prisma/UserRepository";
import { UserLoginDataDAO } from "../../dao/UserLoginDataDAO";

class LoginService {
    constructor(private userRepository: UserRepository) {}

    async execute({ email, password }: UserLoginDataDAO) {
        const user = await this.userRepository.getByEmail(email)

        if (!user) {
            return null;
        }
        
        return user?.password === password ? user : null
    }
}

export { LoginService }