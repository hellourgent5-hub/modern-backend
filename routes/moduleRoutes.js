import express from "express";
import { createModule, getModules } from "../controllers/moduleController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all modules
router.get("/", getModules);

// POST create module (admin only)
router.post("/", protect, admin, createModule);

export default router;
