const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Reviews Routes', function () {

    let created_review_id = null;

    it('Create Review no Auth', async () => {
        const response = await request.post('/reviews/create').send({
            user: "637170e6d43d1235a71cb6e4",
            product: "6381fcd5709f772a3c7a5972",
            stars: 4,
            comment: "Buen producto",
            text: "El producto llegó a tiempo",
        })

        expect(response.status).toBe(401)
    })

    it('Create Review with Auth', async () => {

        const response_auth = await request.post('/auth/login').send({
            email: "donny@gmail.com",
            password: "123456"
        })

        const token = response_auth.body.data.token;

        const response = await request.post('/reviews/create')
        .set({ "auth-token": token })
        .send({
            user: "637170e6d43d1235a71cb6e4",
            product: "6381fcd5709f772a3c7a5972",
            stars: 4,
            comment: "Buen producto",
            text: "El producto llegó a tiempo",
        })

        created_review_id = response.body.data._id;

        expect(response.status).toBe(200)
    })

    it('Delete review no auth', async () => {
        if(created_review_id){
            const response = await request.delete('/reviews/delete/'+created_review_id)
            expect(response.status).toBe(401)
        }
    })

    it('Delete review with auth', async () => {
        if(created_review_id){
            
            const response_auth = await request.post('/auth/login').send({
                email: "donny@gmail.com",
                password: "123456"
            })
    
            const token = response_auth.body.data.token;

            const response = await request
            .delete('/reviews/delete/'+created_review_id)
            .set({ "auth-token": token })
            expect(response.status).toBe(200)
        }
    })

    it('Get All reviews', async () => {
        const response = await request.get('/reviews/readAll')
        expect(response.status).toBe(200)
    })
    
})


