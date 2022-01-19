const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
var cors = require('cors')
const authApi = require('./api/authApi')
const mapApi = require('./api/map')

dotenv.config({ path: __dirname + '/.env' })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authApi)
app.use('/api', mapApi)

app.use((error, req, res, next) => {
  if (res.headerSet) {
    return next(error)
  }
  res.status(error.status || 500)
  res.json({ message: error.constructor.name, status: error.status })
})
// chatControoler.connectToSocket(io)
let userArry = []
io.on('connection', (socket) => {
  // console.log('socket is run')

  socket.on('join_room', (data) => {
    socket.join(data.room)
  })
  socket.on('send_message', (data) => {
    socket.to(data.room).emit('receive_message', data.content)
  })
  socket.on('userList', (data) => {
    let flag = -1
    if (userArry.length > 0) {
      userArry.map((user) => {
        if (user.mobile == data.mobile) {
          flag = 1
        }
      })
      if (flag == -1) {
        userArry.push(data)
      }
    } else {
      userArry.push(data)
    }
    socket.emit('receive_list', { ...[userArry] })
  })

  socket.on('leftRoom', (data) => {
    userArry = userArry.filter((user) => {
      return user.mobile !== data.mobile
    })
    socket.emit('left_user', { ...[userArry] })
  })
})

mongoose
  .connect('mongodb://127.0.0.1:27017/stackAmlak', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    server.listen(5000)
  })
  .catch((err) => {
    console.log(err)
  })
