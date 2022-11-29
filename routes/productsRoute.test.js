const app = require('../index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

describe('Products Routes', function () {
    it('Get All Products', async () => {
        const response = await request.get('/products/readAll')
        expect(response.status).toBe(200)
    })

    it('Create Product', async () => {
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
    })

})


