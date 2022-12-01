const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Categories Routes', function () {

    it('Create Category no Auth', async () => {
        const response = await request.post('/categories/create').send({
            category: "Eletrodomesticos",
        })

        expect(response.status).toBe(401)
    })

    it('Create Category with Auth', async () => {

        const response_auth = await request.post('/auth/login').send({
            email: "donny@gmail.com",
            password: "123456"
        })
    
        const token = response_auth.body.data.token;

        const response = await request.post('/categories/create')
        .set({ "auth-token": token })
        .send({
            category: "Eletrodomesticos",
        })

        expect(response.status).toBe(200)
    })

    it('Get All Categories', async () => {
        const response = await request.get('/categories/readAll')
        expect(response.status).toBe(200)
    })
    
})


