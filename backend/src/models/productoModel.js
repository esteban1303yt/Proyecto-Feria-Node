// src/models/productoModel.js
import db from "../config/db.js";

export const getAllProductos = async () => {
  const [rows] = await db.query("SELECT * FROM producto");
  return rows;
};

export const createProducto = async (nombre) => {
  const [result] = await db.query(
    "INSERT INTO producto (nombre_producto) VALUES (?)",
    [nombre]
  );
  return result.insertId;
};

export const getProductoById = async (id) => {
  const [rows] = await db.query("SELECT * FROM producto WHERE id_producto = ?", [id]);
  return rows[0];
};

export const updateProducto = async (id, nombre) => {
  await db.query("UPDATE producto SET nombre_producto = ? WHERE id_producto = ?", [nombre, id]);
};

export const deleteProducto = async (id) => {
  await db.query("DELETE FROM producto WHERE id_producto = ?", [id]);
};
