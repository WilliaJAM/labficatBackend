const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const monitoringController = createController("seguimiento", "id_seguimiento");

router.get("/", monitoringController.getAll);

router.get("/:id", monitoringController.getById);

router.post("/createMonitoring", monitoringController.create);

router.delete("/:id", monitoringController.delete);

router.put("/:id", monitoringController.update);


module.exports = router; 