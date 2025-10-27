const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Base route: /api/users
router.post("/", userController.create);
router.put("/:id", userController.update);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.delete("/:id", userController.delete);

module.exports = router;
