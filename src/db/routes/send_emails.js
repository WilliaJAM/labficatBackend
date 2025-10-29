const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const sendEmailController = createController("send_email", "id_send_email")


router.get("/", sendEmailController.getAll);

router.get("/:id", sendEmailController.getById);

router.post("/createSendEmail", sendEmailController.create);

router.put("/:id", sendEmailController.update);

router.delete("/:id", sendEmailController.delete);


module.exports = router;