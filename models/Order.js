import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number
    }
  ],
  totalPrice: Number,
  status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
