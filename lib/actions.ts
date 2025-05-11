"use server";

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8zw3i8be", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset name if different
  apiVersion: "2024-05-11", // Use today's date or your preferred API version
  useCdn: true, // `false` if you want to ensure fresh data
  token:
    "skOVB69L3fzOXvkHMxbMCjckHVmqOoE46cPHLRSYYwBMfXm9SSo5yjIfSgfHvaBqWaXXr77pLiIpynDQzrKHPnJwVmrZQsro397e9l52wWbNgavrV5yy8cqGW1rqgvzn6XlVNtT1zcPNmydWbxq6h09OpYnOLBmLIw7ksesUaIgqQWAoN4aV",
});

export async function createOrder(orderData: {
  productId: string;
  productName: string;
  contactInfo: string;
  quantity: number;
  status: string;
}) {
  try {
    const result = await client.create({
      _type: "order",
      productId: orderData.productId,
      productName: orderData.productName,
      contactInfo: orderData.contactInfo,
      quantity: orderData.quantity,
      status: orderData.status,
    });

    return { success: true, orderId: result._id };
  } catch (error) {
    console.error("Failed to create order:", error);
    throw new Error("Failed to create order");
  }
}

export async function updateOrderStatus(orderId: string, status: string) {
  try {
    await client.patch(orderId).set({ status }).commit();
    return { success: true };
  } catch (error) {
    console.error("Failed to update order status:", error);
    throw new Error("Failed to update order status");
  }
}
