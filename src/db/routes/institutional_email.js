const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");


const institutionalEmailController = createController("correo_institucional", "id_correo");

router.get("/", institutionalEmailController.getAll);

router.get("/:id", institutionalEmailController.getAll);

router.post("/createEmail", institutionalEmailController.create);

router.put("/:id", institutionalEmailController.update);

router.delete("/:id", institutionalEmailController.delete);

module.exports = router;