// src/models/ventaModel.js
import db from "../config/db.js";

export const getAllVentas = async () => {
  const [rows] = await db.query(`
    SELECT v.id_venta, v.fecha_venta, a.nombre_artesano
    FROM venta v
    INNER JOIN artesano a ON v.id_artesano = a.id_artesano
  `);
  return rows;
};

export const createVenta = async (id_artesano, fecha_venta) => {
  const [result] = await db.query(
    "INSERT INTO venta (id_artesano, fecha_venta) VALUES (?, ?)",
    [id_artesano, fecha_venta]
  );
  return result.insertId;
};

export const getVentaById = async (id) => {
  const [rows] = await db.query(
    `SELECT v.id_venta, v.fecha_venta, a.nombre_artesano
     FROM venta v
     INNER JOIN artesano a ON v.id_artesano = a.id_artesano
     WHERE v.id_venta = ?`,
    [id]
  );
  return rows[0];
};

export const deleteVenta = async (id) => {
  await db.query("DELETE FROM venta WHERE id_venta = ?", [id]);
};
