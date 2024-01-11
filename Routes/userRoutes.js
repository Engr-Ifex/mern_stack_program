const express = require('express')
const {registerUser, allUsers, updateUser, deleteUser} = require('../Controllers/userControllers')
const userRouters = express.Router()

userRouters.post('/register-user', registerUser)

userRouters.get('/all-users', allUsers)

userRouters.put('/update-user/:id', updateUser)

userRouters.put('/delete-user/:id', deleteUser)

module.exports = userRouters