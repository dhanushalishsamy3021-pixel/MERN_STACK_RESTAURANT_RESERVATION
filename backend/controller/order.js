import ErrorHandler from "../middlewares/error.js";
import { Order } from "../models/order.js";

export const createOrder = async (req, res, next) => {
  const {
    dishId,
    dishName,
    category,
    price,
    quantity,
    customerName,
    email,
    phone,
    address,
  } = req.body;

  if (
    !dishId ||
    !dishName ||
    !category ||
    !price ||
    !quantity ||
    !customerName ||
    !email ||
    !phone ||
    !address
  ) {
    return next(new ErrorHandler("Please fill all order details", 400));
  }

  try {
    const totalAmount = Number(price) * Number(quantity);

    const order = await Order.create({
      user: req.user?.id || null,
      dishId,
      dishName,
      category,
      price: Number(price),
      quantity: Number(quantity),
      totalAmount,
      customerName,
      email,
      phone,
      address,
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: {
        orderId: order.orderId,
        dishName: order.dishName,
        quantity: order.quantity,
        totalAmount: order.totalAmount,
        status: order.status,
      },
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(messages.join(", "), 400));
    }
    return next(error);
  }
};

export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    return next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findOne({ orderId: req.params.orderId });

    if (!order) {
      return next(new ErrorHandler("Order not found", 404));
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    return next(error);
  }
};
