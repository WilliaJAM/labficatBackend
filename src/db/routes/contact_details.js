const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const concatDetailController = createController("contact_detail", "id_contact");

router.get("/", concatDetailController.getAll);

router.get("/:id", concatDetailController.getById);

router.post("/createConcatDetail", concatDetailController.create);

router.delete("/:id", concatDetailController.delete);

router.put("/:id", concatDetailController.update);



module.exports = router; 