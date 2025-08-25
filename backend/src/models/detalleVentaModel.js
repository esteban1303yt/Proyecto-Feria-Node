// src/models/detalleVentaModel.js
import db from "../config/db.js";

export const getAllDetalles = async () => {
  const [rows] = await db.query(`
    SELECT dv.id_detalle_venta, v.fecha_venta, a.nombre_artesano, p.nombre_producto, dv.cantidad, dv.precio
    FROM detalle_venta dv
    INNER JOIN venta v ON dv.id_venta = v.id_venta
    INNER JOIN artesano a ON v.id_artesano = a.id_artesano
    INNER JOIN producto p ON dv.id_producto = p.id_producto
  `);
  return rows;
};

export const createDetalle = async (id_venta, id_producto, precio, cantidad) => {
  const [result] = await db.query(
    "INSERT INTO detalle_venta (id_venta, id_producto, precio, cantidad) VALUES (?, ?, ?, ?)",
    [id_venta, id_producto, precio, cantidad]
  );
  return result.insertId;
};

export const getDetalleById = async (id) => {
  const [rows] = await db.query(
    `SELECT dv.id_detalle_venta, v.fecha_venta, a.nombre_artesano, p.nombre_producto, dv.cantidad, dv.precio
     FROM detalle_venta dv
     INNER JOIN venta v ON dv.id_venta = v.id_venta
     INNER JOIN artesano a ON v.id_artesano = a.id_artesano
     INNER JOIN producto p ON dv.id_producto = p.id_producto
     WHERE dv.id_detalle_venta = ?`,
    [id]
  );
  return rows[0];
};

export const deleteDetalle = async (id) => {
  await db.query("DELETE FROM detalle_venta WHERE id_detalle_venta = ?", [id]);
};
