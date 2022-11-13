console.log("\nWelcome to Amazonas API");
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//MIDDLEWARE AUTH
const verifyToken = require('./middleware/authMiddleware');

// MIDDLEWARE JSON
app.use(express.json());

// MONGO CONNECTION
mongoose.connect(
    "mongodb+srv://vrmedina:admin@cluster0.9aoeewj.mongodb.net/Amazonas?retryWrites=true&w=majority"
    )
.then(() => {
    console.log("\nSuccess: Connected to the database :)");
})
.catch((e) => {
    console.log(e)
    console.log("\nError: Couldn't connect to the database :'(")
})

// ROUTES DECLARATION
const usersRoute = require('./routes/usersRoute')
app.use("/users", verifyToken, usersRoute)

const productsRoute = require('./routes/productsRoute')
app.use("/products", verifyToken, productsRoute)

const categoriesRoute = require('./routes/categoriesRoute')
app.use("/categories", verifyToken, categoriesRoute)

const reviewsRoute = require('./routes/reviewsRoute')
app.use("/reviews", verifyToken, reviewsRoute)

const authRoute = require('./routes/authRoute')
app.use("/auth", verifyToken, authRoute)

// OPENING APP PORT
app.listen(3000, () => console.log(`\nServer Started at ${3000}`))