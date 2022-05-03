const express = require('express')
const router = express.Router();
const LoginController = require("../controllers/login");


router.post("/", LoginController.check);
// router.get("/:id", ServiceController.findOne);
// router.post("/", ServiceController.create);
// router.put("/:id", ServiceController.updatestatus);
// router.delete("/:id", ServiceController.deleteOne);

module.exports = router;