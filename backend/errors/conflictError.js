class ConflictError extends Error {
  constructor() {
    super()
  }
}

class UserExists extends ConflictError {
  constructor() {
    super()
  }
}

class UserNameExists extends ConflictError {
  constructor() {
    super()
  }
}
class NotUserNameExists extends ConflictError {
  constructor() {
    super()
  }
}

class accountNumberExists extends ConflictError {
  constructor() {
    super()
  }
}

module.exports.ConflictError = ConflictError
module.exports.UserExists = UserExists
module.exports.UserNameExists = UserNameExists
module.exports.NotUserNameExists = NotUserNameExists
module.exports.accountNumberExists = accountNumberExists
