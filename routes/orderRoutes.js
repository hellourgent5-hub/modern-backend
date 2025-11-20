import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all orders (admin only)
router.get("/", protect, admin, getOrders);

// POST create order
router.post("/", protect, createOrder);

export default router;
