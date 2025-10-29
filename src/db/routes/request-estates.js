const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction")

const requesStateController = createController("request_state", "id_req_state");

router.get("/", requesStateController.getAll)

router.get("/:id", requesStateController.getById);

router.post("/createRequestState", requesStateController.create);

router.delete("/:id", requesStateController.delete);

router.put("/:id", requesStateController.update);


module.exports = router

