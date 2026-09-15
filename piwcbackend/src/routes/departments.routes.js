import express from "express";
import departmentsController from "../controllers/departments.controller.js";
import authenticate from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, departmentsController.create);
router.get("/", authenticate, departmentsController.getAll);
router.get("/:id", authenticate, departmentsController.getById);
router.put("/:id", authenticate, departmentsController.update);
router.delete("/:id", authenticate, departmentsController.remove);

export default router;