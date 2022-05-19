const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, required: true },
  isAdmin: {type: Boolean, default: false}
})

userModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userModel.pre('save', async function (next) {
  if (!this.isModified) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})
module.exports = mongoose.model('Users', userModel)
