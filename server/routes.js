const express = require('express')
const { getAllUsers, addUser, authUser } = require('./controller')
const protect = require('./auth')

const router = express.Router()

router.get('/users', protect, getAllUsers)
router.post('/signup', addUser).post('/login', authUser)

module.exports = router
