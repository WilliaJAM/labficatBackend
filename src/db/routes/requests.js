const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const requestController = createController("request", "id_request");

router.get("/", requestController.getAll);

router.get("/:id", requestController.getById);

router.post("/createRequest", requestController.create);

router.delete("/:id", requestController.delete);

router.put("/:id", requestController.update);


module.exports = router; 