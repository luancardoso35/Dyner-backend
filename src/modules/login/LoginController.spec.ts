import { app } from "../.."
import request from 'supertest'
import { UserLoginDataDAO } from "../../dao/UserLoginDataDAO"

describe('tests the login requests', () => {
    it('should return 200 when login is successful', async() => {
        const response = await request(app).post('/user/sign-in').send({
            email: 'luancaardoso10@gmail.com',
            password: '12345678'
        } as UserLoginDataDAO)

        expect(response.statusCode).toBe(200)
        expect(response.body?.success).toBeTruthy()
        expect(response.body).toHaveProperty('data')
        expect(response.body).toHaveProperty('token')
        expect(response.body.data).toMatchObject({
            id: expect.any(String),
            name: expect.any(String),
            email: expect.any(String),
            password: expect.any(String),
            avatarSeed: expect.any(String),
        })
    })

    it('should return 400 when missing data', async() => {
        const response = await request(app).post('/user/sign-in').send({
            email: 'luancaardoso10@gmail.com',
        } as UserLoginDataDAO)

        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({success:false, message:'Please fill every field'})
    })

    it('should return 404 when user does not exist', async() => {
        const response = await request(app).post('/user/sign-in').send({
            email: 'luancaardoso10@gmail.com',
            password: '123'
        } as UserLoginDataDAO)

        expect(response.statusCode).toBe(404)
        expect(response.body).toEqual({success:false, message:'Wrong username or password'})
    })
})