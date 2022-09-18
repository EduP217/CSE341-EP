const router = require('express').Router();

const controller = require('../controllers');

router.get("/", controller.welcome);
router.use("/contacts", require('./contacts'));

module.exports = router;