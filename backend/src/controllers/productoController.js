// src/controllers/productoController.js
const Producto = require('../models/productoModel');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.getAllProductos();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductoById = async (req, res) => {
  try {
    const producto = await Producto.getProductoById(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const { nombre_producto } = req.body;
    if (!nombre_producto) return res.status(400).json({ message: 'El nombre es obligatorio' });

    const id = await Producto.createProducto(nombre_producto);
    res.status(201).json({ id, nombre_producto });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    const { nombre_producto } = req.body;
    await Producto.updateProducto(req.params.id, nombre_producto);
    res.json({ message: 'Producto actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProducto = async (req, res) => {
  try {
    await Producto.deleteProducto(req.params.id);
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};