const express = require('express');
const cors = require('cors');
const config = require('./src/config')
const app = express()
const mongoose = require('mongoose')
const routes = require('./src/routes/index')


app.use(express.json());
app.use(cors());
app.use(routes);

const start = async () => {
    try {
        await mongoose.connect(config.dataBase.baseUrl)
        app.listen(config.port, () => {
            console.log(`Server has been started on port ${config.port}...` )
        })
    } catch(e) {
        console.log(e)
    }
}

start()