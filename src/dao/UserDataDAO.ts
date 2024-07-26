import { UUID } from "crypto";

export interface UserDataDAO {
    id?: UUID
    name: string,
    email: string,
    password: string,
    avatarSeed: string,
}