class BadRequestError extends Error {
  constructor(...args) {
    super(...args)
  }
}

class EmptyInputs extends BadRequestError {
  constructor() {
    super()
  }
}


class EmptyPassword extends BadRequestError {
  constructor() {
    super()
  }
}



class InvalidEmail extends BadRequestError {
  constructor() {
    super()
  }
}


class InvalidID extends BadRequestError {
  constructor() {
    super()
  }
}


class passwordNotMatch extends BadRequestError {
  constructor() {
    super()
  }
}

class InvalidPassword extends BadRequestError {
  constructor() {
    super()
  }
}
class InvalidData extends BadRequestError {
  constructor() {
    super()
  }
}


module.exports.BadRequestError = BadRequestError
module.exports.EmptyInputs = EmptyInputs
module.exports.EmptyPassword = EmptyPassword
module.exports.InvalidEmail = InvalidEmail
module.exports.InvalidID = InvalidID
module.exports.passwordNotMatch = passwordNotMatch
module.exports.InvalidPassword = InvalidPassword
module.exports.InvalidData = InvalidData
