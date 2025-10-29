const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const acceptanceRateController = createController("acceptance_rate", "id_acceptance");


router.get("/", acceptanceRateController.getAll);

router.get("/:id", acceptanceRateController.getById);

router.post("/createAcepptanceRate", acceptanceRateController.create);

router.put("/:id", acceptanceRateController.update);

router.delete("/:id", acceptanceRateController.delete);


module.exports = router
