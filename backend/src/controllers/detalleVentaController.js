const Detalle = require('../models/detalleVentaModel');

// Listar todos los detalles de ventas
exports.getAllDetalles = async (req, res) => {
  try {
    const detalles = await Detalle.getAllDetalles();
    res.json(detalles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar detalle por ID
exports.getDetalleById = async (req, res) => {
  try {
    const detalle = await Detalle.getDetalleById(req.params.id);
    if (!detalle) return res.status(404).json({ message: 'Detalle no encontrado' });
    res.json(detalle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un detalle de venta
exports.createDetalle = async (req, res) => {
  try {
    const { id_venta, id_producto, precio, cantidad } = req.body;
    if (!id_venta || !id_producto || !precio || !cantidad) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const id = await Detalle.createDetalle(id_venta, id_producto, precio, cantidad);
    res.status(201).json({ id, id_venta, id_producto, precio, cantidad });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un detalle
exports.deleteDetalle = async (req, res) => {
  try {
    await Detalle.deleteDetalle(req.params.id);
    res.json({ message: 'Detalle eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};