import { UUID } from "crypto";
import { UserDataDAO } from "../dao/UserDataDAO"; 

export interface IUserRepository {
    create({ name, email, password, avatarSeed } : UserDataDAO): Promise<UserDataDAO>;
    getById( uuid: UUID ): Promise<UserDataDAO | null>;
    getByIds( ids: UUID[] ): Promise<UserDataDAO[]>;
    getByName( name: string, username: string ): Promise<UserDataDAO[] | null>;
    getByEmail( email: string, password: string ): Promise<UserDataDAO | null>;
    addFriend( newFriendId: string, userId: string ): Promise<UserDataDAO | null>;
}