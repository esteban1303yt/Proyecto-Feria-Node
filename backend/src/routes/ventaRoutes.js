const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Rutas CRUD para ventas
router.get('/', ventaController.getAllVentas);       // GET /api/ventas
router.get('/:id', ventaController.getVentaById);    // GET /api/ventas/:id
router.post('/', ventaController.createVenta);       // POST /api/ventas
router.delete('/:id', ventaController.deleteVenta);  // DELETE /api/ventas/:id

module.exports = router;