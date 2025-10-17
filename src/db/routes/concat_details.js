const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const concatDetailController = createController("dato_de_contacto", "id_contacto");

router.get("/", concatDetailController.getAll);

router.get("/:id", concatDetailController.getById);

router.post("/createConcatDetail", concatDetailController.create);

router.delete("/:id", concatDetailController.delete);

router.put("/:id", concatDetailController.update);



module.exports = router; 