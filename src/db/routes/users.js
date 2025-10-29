const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const userController  = createController("user", "id_user");


router.get("/", userController.getAll);

router.get("/:id", userController.getById);

router.post("/createUser", userController.create);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

module.exports = router
