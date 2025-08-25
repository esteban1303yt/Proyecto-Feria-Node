const Venta = require('../models/ventaModel');

// Listar todas las ventas
exports.getAllVentas = async (req, res) => {
  try {
    const ventas = await Venta.getAllVentas();
    res.json(ventas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar una venta por ID
exports.getVentaById = async (req, res) => {
  try {
    const venta = await Venta.getVentaById(req.params.id);
    if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
    res.json(venta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva venta
exports.createVenta = async (req, res) => {
  try {
    const { id_artesano, fecha_venta } = req.body;
    if (!id_artesano || !fecha_venta) {
      return res.status(400).json({ message: 'id_artesano y fecha_venta son obligatorios' });
    }

    const id = await Venta.createVenta(id_artesano, fecha_venta);
    res.status(201).json({ id, id_artesano, fecha_venta });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una venta
exports.deleteVenta = async (req, res) => {
  try {
    await Venta.deleteVenta(req.params.id);
    res.json({ message: 'Venta eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
