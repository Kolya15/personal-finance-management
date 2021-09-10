const express = require('express');
const PORT = 3000;
const app = express()

const mongoose = require('mongoose')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://kolya:U407KXno5pOI3rD8@cluster0.8flk0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...` )
        })
    } catch(e) {
        console.log(e)
    }
}

start()

const routes = require('./src/routes/index')
//
//
app.use(routes);
//
app.get('/', (req, res) => {
    res.send('TEST!')
})
