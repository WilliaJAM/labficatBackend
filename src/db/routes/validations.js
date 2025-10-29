const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const validationController = createController("validation", "id_validation");


router.get("/", validationController.getAll);

router.get("/:id", validationController.getById);

router.post("/createValidation", validationController.create);

router.delete("/:id", validationController.delete);

router.put("/:id", validationController.update);

module.exports = router;