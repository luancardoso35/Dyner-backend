import { app } from "../.."
import request from 'supertest'

describe('Requests for user creation', () => {
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

    
    it('should return status 200 when user created', async() => {
        const response = await request(app).post('/user/sign-up').send({
            name: "Luan Cardoso",
            email: makeEmail(),
            password: '12345678',
            avatarSeed: 'dasda'
        })

        expect(response.statusCode).toBe(203)
        expect(response.body).toEqual({success: true})
    })

    it('should return status 400 when user already exists', async() => {
        const response = await request(app).post('/user/sign-up').send({
            name: "Luan Cardoso",
            email: 'luancaardoso10@gmail.com',
            password: '12345678',
            avatarSeed: 'dasda'
        })

        expect(response.statusCode).toBe(409)
        expect(response.body).toEqual({success: false, message: 'User already exists'})
    })

    it('should return status 400 when user already exists', async() => {
        const response = await request(app).post('/user/sign-up').send({
            name: "Luan Cardoso",
            email: 'luancaardoso10@gmail.com',
            password: '12345678',
        })

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({success: false, message: 'Fill every field'})
    })
})