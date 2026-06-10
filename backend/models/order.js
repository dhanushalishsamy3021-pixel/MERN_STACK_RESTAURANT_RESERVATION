import mongoose from "mongoose";
import validator from "validator";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
  },
  dishId: {
    type: Number,
    required: true,
  },
  dishName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
    default: 1,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone must be at least 10 digits"],
    maxLength: [15, "Phone cannot exceed 15 digits"],
  },
  address: {
    type: String,
    required: true,
    minLength: [5, "Address must be at least 5 characters"],
  },
  status: {
    type: String,
    enum: ["pending", "preparing", "delivered"],
    default: "pending",
  },
  orderId: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.pre("save", function (next) {
  if (!this.orderId) {
    this.orderId = `FL${Date.now().toString().slice(-8)}`;
  }
  next();
});

export const Order = mongoose.model("Order", orderSchema);
