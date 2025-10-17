const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");

const activityLogController = createController("log_actividad", "id_actividad");

router.get("/", activityLogController.getAll);

router.get("/:id", activityLogController.getById);

router.post("/createLog", activityLogController.create);

router.delete("/:id", activityLogController.delete);

router.put("/:id", activityLogController.update);



module.exports = router; 