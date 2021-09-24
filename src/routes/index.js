const {Router} = require('express')
const router = Router()
const varify = require('../middleware/authMiddleware')

router.use('*', varify)
router.use('/users', require('./api/userRouter'));
router.use('/auth', require('./api/authRouter'));
router.use('/income', require('./api/income/incomeRouter'));
router.use('/categories/income', require('./api/income/categoriesRouter'));
router.use('/expense', require('./api/expense/expenseRouter'));
router.use('/categories/expense', require('./api/expense/categoriesRouter'));

module.exports = router;