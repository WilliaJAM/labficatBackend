const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const applicationMethodController = createController("medio_de_solicitud", "id_medio_de_solicitud");

router.get("/", applicationMethodController.getAll);

router.get("/:id", applicationMethodController.getById);

router.post("/createMethod", applicationMethodController.create);

router.delete("/:id", applicationMethodController.delete);

router.put("/:id", applicationMethodController.update);


module.exports = router; 