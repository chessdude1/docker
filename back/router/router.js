const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/user-controlles');

router.get('/users', userController.users)

module.exports = router