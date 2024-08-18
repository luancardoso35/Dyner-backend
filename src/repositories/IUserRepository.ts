import { UUID } from "crypto";
import { UserDTO } from "../dao/UserDTO"; 

export interface IUserRepository {
    create({ name, email, password, avatarSeed } : UserDTO): Promise<UserDTO>;
    getById( uuid: UUID ): Promise<UserDTO | null>;
    getByIds( ids: UUID[] ): Promise<UserDTO[]>;
    getByName( name: string, username: string ): Promise<UserDTO[] | null>;
    getByEmail( email: string): Promise<UserDTO | null>;
    addFriend( newFriendId: string, userId: string ): Promise<UserDTO | null>;
    updatePassword( newPassword: string, userId: string ): Promise<boolean>;
}