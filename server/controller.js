const User = require('./model')
const generateToken = require('./generateToken')

module.exports = {
  home: async (req, res)=>{
    const name = req.query.name
    res.send('Welcome '+name)
  },
  getAllUsers: async (req, res) => {
    const users = await User.find()
    res.send(users)
  },
  addUser: async (req, res) => {
    const { name, email, password, isAdmin } = req.body
    console.log(req.body)
    if (name !== null && email !== null && password !== null) {
      try {
        const user = await User.create({
          name,
          email,
          password,
          isAdmin
        })
        if (user) {
          res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
          })
        }
        console.log('User added')
      } catch (error) {
        console.log('Error: ' + error)
        return res.status(500).send('Cannont add user')
      }
    } else {
      res.send('Fill all fields')
      console.log('Fill all fields')
    }
  },
  authUser: async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      })
    } else {
      return res.send('Invalid email or password')
    }
  },
}
