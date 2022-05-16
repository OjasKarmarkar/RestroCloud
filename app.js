import dotenv from 'dotenv'
import express from 'express'
import db from './db/db.js'
import morgan from 'morgan'
import myRouter from './routes/routes.js'
// import activityRouter from './routes/activity.js'
import cors from 'cors'

const port = process.env.PORT || 3001

dotenv.config()
const app = express()
await db()

app.use(morgan(':method :url :status :response-time ms'))

app.use(cors())
app.use(express.json())

app.use('/api', myRouter)
// app.use('/api/activity', activityRouter)
 
const server = app.listen(port, () =>
  console.log(`server has started on port ${port}`)
)

export default server