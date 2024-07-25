import { UUID } from "crypto";

export interface UserData {
    id?: UUID
    name: string,
    email: string,
    password: string,
    avatarSeed: string,
}

export interface IUserRepository {
    create({ name, email, password, avatarSeed } : UserData): Promise<UserData>;
    getById( uuid: UUID ): UserData;
}