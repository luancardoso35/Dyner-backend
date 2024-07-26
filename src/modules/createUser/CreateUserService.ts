import { Prisma } from "@prisma/client";
import { UserRepository } from "../../repositories/prisma/UserRepository";
import { UserDataDAO } from "../../dao/UserDataDAO";

class CreateUserService {

    constructor(private userRepository: UserRepository) {}

    async execute({ name, email, password, avatarSeed } : UserDataDAO) {
        try {
            const user = await this.userRepository.create({ name, email, password, avatarSeed } as UserDataDAO);
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