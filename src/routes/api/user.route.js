const {Router} = require('express')
const router = Router()

router.get('/user', (req, res) => {
    res.send('USER')
})

module.exports = router