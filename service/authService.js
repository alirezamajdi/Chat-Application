const jwt = require('jsonwebtoken')

// Models
const User = require('../data/models/user')

// Errors
const { InvalidPassword, InvalidData } = require('../errors/badRequestError')
const { UserNameExists, NotUserNameExists } = require('../errors/conflictError')


// Services
exports.register = async (data) => {
  const { userName, password, fullName } = data
  const userNameExists = await User.findOne({ userName })
  if (userNameExists) {
    throw new UserNameExists()
  }

  const newUser = await User.create({
    userName,
    fullName,
    password,
  })

  if (!newUser) {
    throw new InvalidData()
  }

  createdUser = newUser

  const body = {
    _id: createdUser._id,
    userName: createdUser.userName,
    fullName: createdUser.fullName,
  }


  const token = jwt.sign({ user: body }, 'secret_key', {
    expiresIn: '30d',
  })

  return token

}

exports.login = async (data) => {
  const { userName, password } = data

  const userNameExists = await User.findOne({ userName })

  if (!userNameExists) {
    throw new NotUserNameExists()
  }

  if (!userNameExists.comparePassword(password)) {
    throw new InvalidPassword()
  }



  const body = {
    _id: userNameExists._id,
    userName: userNameExists.userName,
    fullName: userNameExists.fullName,

  }
  const token = jwt.sign({ user: body }, 'secret_key', {
    expiresIn: '30d',
  })
  return token
}
