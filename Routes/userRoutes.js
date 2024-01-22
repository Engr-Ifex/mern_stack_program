const express = require('express')
const {registerUser, allUsers, updateUser, deleteUser, loginUser} = require('../Controllers/userControllers')
const createTask = require('../Controllers/taskController')
const verifyUser = require('../Middlewares/verify.js')
const userRouters = express.Router()

userRouters.post('/register-user', registerUser)

userRouters.get('/all-users', allUsers)

userRouters.put('/update-user/:id', updateUser)

userRouters.put('/delete-user/:id', deleteUser)

userRouters.post('/login-user', loginUser)

userRouters.post('/add-task', verifyUser, createTask)

module.exports = userRouters