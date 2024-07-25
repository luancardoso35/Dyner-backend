import { UserData } from "../../repositories/IUserRepository"
import { UserRepository } from "../../repositories/prisma/UserRepository"
import { CreateUserService } from "./CreateUserService"

describe("Create a new user", () => {
    let createUserService: CreateUserService;
    let userRepository: UserRepository;

    function makeEmail() {
        var strValues = "abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }

    beforeAll(() => {
        userRepository = new UserRepository();
        createUserService = new CreateUserService(userRepository)
    })

    it("should create a new user", async() => {
        const user = await createUserService.execute({
            name: "Luan Cardoso",
            email: makeEmail(),
            password: "12345678",
            avatarSeed: "luan"
        } as UserData)

        expect(user).toBeTruthy
        expect(user?.name).toBe('Luan Cardoso')
        expect(user?.password).toBe('12345678')
        expect(user?.avatarSeed).toBe('luan')
        expect(user).toHaveProperty('email')
    })

    it('should not create a user with an email that already exists', async() => {
        const userData = {
            name: "Luan Cardoso",
            email: 'luancaardoso10@gmail.com',
            password: "12345678",
            avatarSeed: "luan"
        } as UserData

        await expect(createUserService.execute(userData)).rejects.toEqual(
            new Error('User already exists')
        )
    })
})