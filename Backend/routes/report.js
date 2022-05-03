const express = require('express')
const router = express.Router();
const ReportController = require("../controllers/report");


router.get("/resident", ReportController.residentFind);
router.get("/month", ReportController.monthFind);
router.get("/year", ReportController.yearFind);
// router.get("/:id", ReportController.findOne);
// router.post("/", ReportController.create);
// router.put("/:id", ReportController.update);
// router.delete("/:id", ReportController.deleteOne);

module.exports = router;