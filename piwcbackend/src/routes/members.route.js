import express from "express";
import membersController from "../controllers/members.controller.js";
import authenticate from "../middlewares/auth.middleware.js";   

const router = express.Router();

router.post("/", authenticate, membersController.create);
router.get("/", authenticate, membersController.getAll);
router.get("/:id", authenticate, membersController.getById);
router.put("/:id", authenticate, membersController.update);
router.delete("/:id", authenticate, membersController.remove);

export default router;