const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { addressToPoint } = require('../service/map')

router.get(
  '/addressToPoint',
  asyncHandler(async (req, res) => {
    const data = await addressToPoint(req.query.locate)
    return res.status(201).json({
      data,
    })
  })
)
router.get(
  '/muliSelect',
  asyncHandler((req, res) => {
    return res.status(201).json({
      data: [
        [38.56666, 46.299999],
        [38.56666, 46.399999],
        [38.66666, 46.99999],
      ],
    })
  })
)
module.exports = router
