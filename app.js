const express = require('express')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

const port = process.env.PORT

// Nodemon -> helps update all changes & reload the server
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// GET -> Read, 
// POST -> Create, 
// PUT -> Update, 
// DELETE -> Delete

