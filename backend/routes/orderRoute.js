import express from "express";
import { createOrder, getMyOrders, getOrderById } from "../controller/order.js";
import { isAuthenticated, optionalAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", optionalAuth, createOrder);
router.get("/my-orders", isAuthenticated, getMyOrders);
router.get("/:orderId", getOrderById);

export default router;
