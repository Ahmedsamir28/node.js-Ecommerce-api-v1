const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
dotenv.config({ path: 'config.env' })

// connect with db
mongoose
    .connect(process.env.DB_URL)
    .then((connect)=>{
        console.log(`Database Connected : ${connect.connection.host}`);
    })
    .catch((err)=>{
        console.error(`Database Error: ${err}`);
        process.exit(1)
    })

const app = express()

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'))
    console.log(`mode: ${process.env.NODE_ENV}`);
}

app.get('/', (req, res) => {
    res.send('ahmed samir')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})