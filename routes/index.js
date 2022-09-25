const router = require('express').Router();

const controller = require('../controllers');

router.get("/", controller.welcome);
router.use("/", require('./swagger'));
router.use("/contacts", require('./contacts'));

module.exports = router;