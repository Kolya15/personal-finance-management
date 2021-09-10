const {Router} = require('express')
const router = new Router()

router.get('/login', (req, res) => {
    res.send('LOGIN')
})



module.exports = router