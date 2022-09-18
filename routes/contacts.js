const router = require('express').Router();

const contactsController = require('../controllers/contacts');

router.get("/", contactsController.all);
router.get("/:id", contactsController.findById);

module.exports = router;