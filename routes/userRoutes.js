import express from "express";
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// GET single user
router.get("/:id", getUser);

// UPDATE user
router.put("/:id", updateUser);

// DELETE user
router.delete("/:id", deleteUser);

export default router;
