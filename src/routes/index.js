const {Router} = require('express')
const router = Router()

router.use('/', require('./api/auth.route'), require('./api/user.route'));

module.exports = router;