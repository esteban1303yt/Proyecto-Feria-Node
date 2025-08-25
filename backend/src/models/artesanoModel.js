// src/models/artesanoModel.js
import db from "../config/db.js";

// Listar todos
export const getAllArtesanos = async () => {
  const [rows] = await db.query("SELECT * FROM artesano");
  return rows;
};

// Crear
export const createArtesano = async (nombre) => {
  const [result] = await db.query(
    "INSERT INTO artesano (nombre_artesano) VALUES (?)",
    [nombre]
  );
  return result.insertId;
};

// Buscar por ID
export const getArtesanoById = async (id) => {
  const [rows] = await db.query("SELECT * FROM artesano WHERE id_artesano = ?", [id]);
  return rows[0];
};

// Actualizar
export const updateArtesano = async (id, nombre) => {
  await db.query("UPDATE artesano SET nombre_artesano = ? WHERE id_artesano = ?", [nombre, id]);
};

// Eliminar
export const deleteArtesano = async (id) => {
  await db.query("DELETE FROM artesano WHERE id_artesano = ?", [id]);
};
