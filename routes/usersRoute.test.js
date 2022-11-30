const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Users Routes', function () {

    it('Create User', async () => {
        const response = await request.post('/users/create').send({
            fullname: "John Doe",
            email: "johndoe@mail.com",
            password: "123456",
            phone: 3004445555,
        })

        expect(response.status).toBe(200)
    })

    it('Get All Users', async () => {
        const response = await request.get('/users/readAll')
        expect(response.status).toBe(200)
    })
    
    it('Get User by Id', async () => {
        const response = await request.get('/users/readOne/637170e6d43d1235a71cb6e4')
        expect(response.status).toBe(200)
    })

    it('Delete user by Email no Auth', async () => {
        const response = await request.delete('/users/delete/donny')
        expect(response.status).toBe(401)
    })

    it('Delete user by Email with Auth', async () => {
        const response_auth = await request.post('/auth/login').send({
            email: "johndoe@mail.com",
            password: "123456"
        })

        const token = response_auth.body.data.token;

        const response = await request.delete('/users/delete/johndoe@mail.com').set({ "auth-token": token })
        expect(response.status).toBe(200)
    })

})


