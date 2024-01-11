const express = require('express')
const dotenv = require('dotenv')
const connectToDB  = require('./Database/db')
dotenv.config()
const app = express()
const userRouters = require('./Routes/userRoutes')
const port = process.env.PORT


// Middleware for parsing JSON request body
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(userRouters)

// Nodemon -> helps update all changes & reload the server
connectToDB()
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})


// GET -> Read, 
// POST -> Create, 
// PUT -> Update, 
// DELETE -> Delete

// Database Connection
// Ralational Database || Non-Relational Databse
// MONGODB -> NO-SQL Database || mongoose

// Connect to DB
