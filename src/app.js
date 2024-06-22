//External imports
import express from 'express'
import cookieParser from 'cookie-parser'

//Internal imports
import { __dirname, constants } from './utils/utils.js'
import { connections, connectDB } from './utils/database.js'

const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser('myParser'))

connections()
app.listen(constants.PORT, () => {
    console.log(`Server running at port ${constants.PORT}`);
})
connectDB()


