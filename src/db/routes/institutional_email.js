const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");


const institutionalEmailController = createController("institutional_email", "id_institutional");

router.get("/", institutionalEmailController.getAll);

router.get("/:id", institutionalEmailController.getAll);

router.post("/createEmail", institutionalEmailController.create);

router.put("/:id", institutionalEmailController.update);

router.delete("/:id", institutionalEmailController.delete);

module.exports = router;