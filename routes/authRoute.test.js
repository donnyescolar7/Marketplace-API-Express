const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Auth Route', function () {
    
    it('Login', async () => {
        const response = await request.post('/auth/login').send({
            email: "donny@gmail.com",
            password: "123456"
        })
        expect(response.status).toBe(200)
    })

    it('Login Incorrect Password', async () => {
        const response = await request.post('/auth/login').send({
            email: "donny@gmail.com",
            password: "1234568555"
        })
        expect(response.status).toBe(404)
    })

})


