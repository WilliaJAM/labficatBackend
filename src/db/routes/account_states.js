const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const stateAccountController = createController("state_account","id_state_account");


router.get("/", stateAccountController.getAll);

router.get("/:id", stateAccountController.getById);

router.post("/createEsate", stateAccountController.create);

router.delete("/:id", stateAccountController.delete);

router.put("/:id", stateAccountController.update);


module.exports = router