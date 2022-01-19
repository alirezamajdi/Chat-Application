const axios = require('axios').default
const { AddressNotFound } = require('../errors/notFoundError')

exports.addressToPoint = async (value) => {
  let response
  try {
    response = await axios({
      method: 'get',
      url: `https://api.neshan.org/v4/geocoding?address=${value}`,
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': 'service.ItFrQrxX4VobjvMVPEkQnHndrqRH9E9anGo9ZKOA',
      },
    })
  } catch (err) {
    console.log(err)
  }
  return response.data
}
