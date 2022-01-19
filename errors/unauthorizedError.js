class UnauthorizedError extends Error {
  constructor() {
    super()
  }
}

class UserNotAuthorized extends UnauthorizedError {
  constructor() {
    super()
  }
}

module.exports.UnauthorizedError = UnauthorizedError
module.exports.UserNotAuthorized = UserNotAuthorized
