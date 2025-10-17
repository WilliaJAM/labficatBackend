const express = require("express");
const router = express.Router();

const createController = require("../controller/createCrontollersFunction");
const documentTypeController = createController("tipo_documento", "id_tipo_documento")


router.get("/", documentTypeController.getAll);

router.get("/:id", documentTypeController.getById);

router.post("/createType", documentTypeController.create);

router.put("/:id", documentTypeController.update);

router.delete("/:id", documentTypeController.delete);


module.exports = router;