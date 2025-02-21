import express from 'express'
import cors from 'cors'

import connectDatabase from './src/database/index.js'
import Root from './src/router/index.js'


const app = express()
connectDatabase()
app.use(cors());
app.use(express.json())
app.use(Root)


app.listen(3000, () => {
    console.log("Server is on")
})