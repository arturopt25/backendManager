const router =  require('express').Router();

const controller = require('../controller/exampleController');

router.get('/', controller.testFunction)

module.exports = router;