const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const acceptanceRateController = createController("porcentaje_de_aceptacion", "id_porcentaje_aceptacion");


router.get("/", acceptanceRateController.getAll);

router.get("/:id", acceptanceRateController.getById);

router.post("/createAcepptanceRate", acceptanceRateController.create);

router.put("/:id", acceptanceRateController.update);

router.delete("/:id", acceptanceRateController.delete);


module.exports = router
