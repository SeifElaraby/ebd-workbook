import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Giza" && order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student} ordered ${order.quantity} x ${order.item}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const trimmed = orders.map((order) => ({
    student: order.student,
    item: order.item,
  }));
  return JSON.stringify(trimmed);
}