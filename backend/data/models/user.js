const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema({
  userName: { type: String, require },
  fullName: { type: String, require },
  password: { type: String, required: true },
  image: { type: String, default: "http://localhost:5000/images/user.png" },
}, {
  timestamps: true
})

User.pre('save', function (next) {
  const salt = bcrypt.genSaltSync(15);
  const hash = bcrypt.hashSync(this.password, salt);
  this.password = hash;
  next();
})
User.pre('findOneAndUpdate', function (next) {
  const salt = bcrypt.genSaltSync(15);
  const hash = bcrypt.hashSync(this.getUpdate().$set.password, salt);
  this.getUpdate().$set.password = hash;
  next();
})

User.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', User)
