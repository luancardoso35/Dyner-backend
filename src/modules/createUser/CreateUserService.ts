import { Prisma } from "@prisma/client";
import { UserData } from "../../repositories/IUserRepository";
import { UserRepository } from "../../repositories/prisma/UserRepository";

class CreateUserService {

    constructor(private userRepository: UserRepository) {}

    async execute({ name, email, password, avatarSeed } : UserData) {
        try {
            const user = await this.userRepository.create({ name, email, password, avatarSeed } as UserData);
            return user; 
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new Error("User already exists");
                }
            }
        }
    }
}

export { CreateUserService }