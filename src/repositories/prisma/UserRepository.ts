import { UUID } from "crypto";
import { IUserRepository } from "../IUserRepository";
import { PrismaClient } from '@prisma/client'
import { UserDTO } from "../../dao/UserDTO"; 

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
    async create({ name, email, password, avatarSeed }: UserDTO): Promise<UserDTO> {
        const user = await prisma.user.create({
            data: {
                avatarSeed,
                name,
                email,
                password,
            }
        }) as UserDTO;

        return user;
    }

    async getById(uuid: string): Promise<UserDTO | null> {
        const user = await prisma.user.findUnique({
            where: {
                id: uuid
            },
            include: {
                friends: true
            }
        })

        if (user) {
            return user as UserDTO;
        }

        return null;
    }

    async getByIds(ids: string[]): Promise<UserDTO[]> {
        const users = await prisma.user.findMany({
            where: {
                id: { in: ids }
            }
        })

        if (users) {
            return users as UserDTO[];
        }

        return [];
    }

    async getByName(name: string, username: string): Promise<UserDTO[] | null> {
        const users = await prisma.user.findMany({
            where: {
                name: {
                    contains: name,
                    not: username
                }
            }
        })

        if (users) {
            return users as UserDTO[];
        }

        return null;
    }

    async getByEmail(email: string): Promise<UserDTO | null> {
        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        })

        if (user) {
            return user as UserDTO;
        }

        return null;
    }

    async addFriend(newFriendId: string, userId: string): Promise<UserDTO | null> {
        try {
            const loggedUser = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    friends: {
                        connect: {id: newFriendId}
                    }
                },
                include: {friends: true}
            })
            return loggedUser ?? null;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    async updatePassword(userId: string, newPassword: string): Promise<boolean> {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                password: newPassword
            }
        })
        return true;
    }
}