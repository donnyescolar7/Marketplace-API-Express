const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('Cart Routes', function () {
    it('Get Products in Cart', async () => {
        const response = await request.get('/cart/getcart/637170e6d43d1235a71cb6e4')
        expect(response.status).toBe(200)
    })

    it('Add Product to Cart', async () => {
        const response = await request.post('/cart/addtocart')
        .send({
            product_id: "6381fcd5709f772a3c7a5972",
            user_id: "637170e6d43d1235a71cb6e4",
            quantity: 1
        })
        expect(response.status).toBe(200)
    })

    it('Delete Product in Cart', async () => {
        const response = await request.delete('/cart/delete/637170e6d43d1235a71cb6e4/6381fcd5709f772a3c7a5972')
        expect(response.status).toBe(200)
    })

})


