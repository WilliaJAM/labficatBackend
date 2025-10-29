const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const technicalValidationController = createController("technical_validation", "id_validation")


router.get("/", technicalValidationController.getAll);

router.get("/:id", technicalValidationController.getById);

router.post("/createTechnicalV", technicalValidationController.create);

router.put("/:id", technicalValidationController.update);

router.delete("/:id", technicalValidationController.delete);


module.exports = router;