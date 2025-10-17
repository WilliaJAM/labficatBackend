const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const stateAccountController = createController("estado_de_la_cuenta","id_estado");


router.get("/", stateAccountController.getAll);

router.get("/:id", stateAccountController.getById);

router.post("/createEsate", stateAccountController.create);

router.delete("/:id", stateAccountController.delete);

router.put("/:id", stateAccountController.update);


module.exports = router