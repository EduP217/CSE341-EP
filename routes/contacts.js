const router = require('express').Router();

const contactsController = require('../controllers/contacts');

router.get("/", contactsController.all);
router.get("/:id", contactsController.findById);
router.post("/", contactsController.create);
router.put("/:id", contactsController.update);
router.delete("/:id", contactsController.destroy);

module.exports = router;