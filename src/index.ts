import express, { Request, Response } from 'express'
import connectDb from './config/mongo-connect'
import redisClient from './config/redis-connect'
import pool from './config/pg-connect'
import User from './models/User'

connectDb()

const app = express()
const PORT = 5000 || process.env.PORT

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
  const users = await User.find({})

  try {
    redisClient.set('foo', 'bar', (err, reply) => {
      if (err) throw err
      console.log(reply)

      redisClient.get('foo', (err, reply) => {
        if (err) throw err
        console.log(reply)
      })
    })

    res.status(200).json({
      users,
      msg: 'Hello World! 🚀🚀🚀🚀',
    })
  } catch (error) {
    res.status(404).json({ success: false, error })
  }
})

app.get('/redis', (req, res) => {
  redisClient.get('foo', (err, reply) => {
    if (err) throw err
    console.log(reply)
    res.json({ redis: reply })
  })
})

app.get('/postgres', (req, res) => {
  pool.query('SELECT NOW()', (err, pgRes) => {
    console.log(err, pgRes)
    console.log('SELECT NOW()', pgRes)
    pool.end()
    res.json({ posgres: err || true, pgRes })
  })
})

app.post('/user', async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = new User({
    email,
    password,
  })

  try {
    await user.save()
    res.status(201).json({ success: true, user })
  } catch (error) {
    res.status(401).json({ success: false, error })
  }
})

app.listen(PORT, () => console.log(`Rocket on port ${PORT} 🚀🚀🚀🚀`))
