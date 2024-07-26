import { UUID } from "crypto";
import { IUserRepository } from "../IUserRepository";
import { PrismaClient } from '@prisma/client'
import { UserDataDAO } from "../../dao/UserDataDAO"; 

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
    async create({ name, email, password, avatarSeed }: UserDataDAO): Promise<UserDataDAO> {
        const user = await prisma.user.create({
            data: {
                avatarSeed,
                name,
                email,
                password,
            }
        }) as UserDataDAO;

        return user;
    }

    getById(uuid: UUID): UserDataDAO {
        throw new Error("Method not implemented.");
    }

    async getByEmail(email: string, password: string): Promise<UserDataDAO | null> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        })

        if (user) {
            return user as UserDataDAO;
        }

        return null;
    }
}