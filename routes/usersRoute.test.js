const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Users Routes', function () {
    it('Get All Users', async () => {
        const response = await request.get('/users/readAll')
        expect(response.status).toBe(200)
    })
    
    it('Get User by Id', async () => {
        const response = await request.get('/users/readOne/637170e6d43d1235a71cb6e4')
        expect(response.status).toBe(200)
    })



    /*it('Create Product', async () => {
        const response = await request.post('/products/create')
        expect(response.status).toBe(401)
    })

    it('Get by Id', async () => {
        const response = await request.get('/products/readOne/6381fcd5709f772a3c7a5972')
        expect(response.status).toBe(200)
    })

    it('Get by Id Empty', async () => {
        const response = await request.get('/products/readOne/')
        expect(response.status).toBe(404)
    })

    it('Update by Id Empty', async () => {
        const response = await request.patch('/products/update/')
        expect(response.status).toBe(401)
    })

    it('Delete by Id Empty no Auth', async () => {
        const response = await request.delete('/products/delete/')
        expect(response.status).toBe(401)
    })*/

})


