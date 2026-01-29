const router = require('express').Router();

const {getTasks} = require('../controllers/getControllers');

router.get('/get_tasks/:userid', getTasks);

module.exports = router;