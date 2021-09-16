const {Router} = require('express')
const router = Router()
const varify = require('../middleware/authMiddleware')

router.use('*', varify)
router.use('/users', require('./api/userRouter'));
router.use('/auth', require('./api/authRouter'));
router.use('/income', require('./api/incomeRouter'));

module.exports = router;