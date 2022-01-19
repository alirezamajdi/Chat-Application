const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const {
  register,
  login
} = require('../service/authService')


router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const token = await register(req.body)
    return res.status(201).json({
      token,
      status: true
    })
  })
)

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const token = await login(req.body)
    return res.status(201).json({
      token,
      status: true
    })
  })
)


module.exports = router
