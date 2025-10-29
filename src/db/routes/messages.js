const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const messageController = createController("message", "id_message");

router.get("/", messageController.getAll);

router.get("/:id", messageController.getById);

router.post("/createMessage", messageController.create);

router.delete("/:id", messageController.delete);

router.put("/:id", messageController.update);


module.exports = router; 