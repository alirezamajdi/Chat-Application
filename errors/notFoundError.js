class NotFoundError extends Error {
  constructor() {
    super()
  }
}

class UserNotFound extends NotFoundError {
  constructor() {
    super()
  }
}

class AddressNotFound extends NotFoundError {
  constructor() {
    super()
  }
}
class PageNotFound extends NotFoundError {
  constructor() {
    super()
  }
}

module.exports.NotFoundError = NotFoundError
module.exports.UserNotFound = UserNotFound
module.exports.PageNotFound = PageNotFound
module.exports.AddressNotFound = AddressNotFound
