export interface UserDataDAO {
    id?: string
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    friends?: UserDataDAO[],
    avatarSeed: string,
}