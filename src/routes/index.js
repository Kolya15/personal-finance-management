const {Router} = require('express')
const router = Router()
const varify = require('../middleware/authMiddleware')

router.use('*', varify)
router.use('/users', require('./api/userRouter'));
router.use('/auth', require('./api/authRouter'));

module.exports = router;