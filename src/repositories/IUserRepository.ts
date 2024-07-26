import { UUID } from "crypto";
import { UserDataDAO } from "../dao/UserDataDAO"; 

export interface IUserRepository {
    create({ name, email, password, avatarSeed } : UserDataDAO): Promise<UserDataDAO>;
    getById( uuid: UUID ): UserDataDAO;
    getByEmail( email: string, password: string ): Promise<UserDataDAO | null>;
}