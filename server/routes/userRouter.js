const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')

router.post('/', userController.registration),
router.get('/', userController.getAll)

module.exports = router;