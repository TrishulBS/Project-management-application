const express = require('express')
require('dotenv').config()
const {graphqlHTTP} = require('express-graphql')
const port = process.env.PORT || 5000
const colors = require('colors')
const schema = require('./schema/schema')
const connectDB = require('./config/db')

const cors = require('cors')

const app = express()
connectDB()
app.use(cors())

app.use('/graphql', 
    graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`server running on port ${port}`))
