const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const rolController = createController("role", "id_role");

router.get("/", rolController.getAll);

router.get("/:id", rolController.getById);

router.post("/createRol", rolController.create);

router.delete("/:id", rolController.delete);

router.put("/:id", rolController.update)

module.exports = router