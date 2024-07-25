import { UUID } from "crypto";
import { IUserRepository, UserData } from "../IUserRepository";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {

    async create({ name, email, password, avatarSeed }: UserData): Promise<UserData> {
        const user = await prisma.user.create({
            data: {
                avatarSeed,
                name,
                email,
                password,
            }
        }) as UserData;

        return user;
    }

    getById(uuid: UUID): UserData {
        throw new Error("Method not implemented.");
    }

}