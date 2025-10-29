const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const customerController = createController("customer", "id_customer");

router.get("/", customerController.getAll);

router.get("/:id", customerController.getById);

router.post("/createCustomer", customerController.create);

router.delete("/:id", customerController.delete);

router.put("/:id", customerController.update);



module.exports = router; 