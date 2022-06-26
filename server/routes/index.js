const Router = require('express');
const router = new Router();
const productRoute = require('./productRouter');
const shopRouter = require('./shopRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/product', productRoute);
router.use('/shop', shopRouter);



module.exports = router;