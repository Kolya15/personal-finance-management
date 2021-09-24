const {Router} = require('express')
const router = Router()
const varify = require('../middleware/authMiddleware')

router.use('*', varify)
router.use('/users', require('./api/userRouter'));
router.use('/auth', require('./api/authRouter'));
router.use('/income', require('./api/incomeRouter'));
router.use('/categories/income', require('./api/incomeCategoriesRouter'));
router.use('/expense', require('./api/expenseRouter'));
router.use('/categories/expense', require('./api/expenseCategoriesRouter'));

module.exports = router;