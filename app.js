const express = require('express');
const app = express()

const index = require('./routes/index')


app.use(index);

app.get('/', (req, res) => {
    res.send('TEST!')
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...` )
})