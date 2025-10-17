const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const sendEmailController = createController("correo_enviado", "id_correo_enviado")


router.get("/", sendEmailController.getAll);

router.get("/:id", sendEmailController.getById);

router.post("/createSendEmail", sendEmailController.create);

router.put("/:id", sendEmailController.update);

router.delete("/:id", sendEmailController.delete);


module.exports = router;