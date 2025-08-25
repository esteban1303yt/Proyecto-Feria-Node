const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleVentaController');

// Rutas CRUD para detalle_venta
router.get('/', detalleController.getAllDetalles);       // GET /api/detalles
router.get('/:id', detalleController.getDetalleById);    // GET /api/detalles/:id
router.post('/', detalleController.createDetalle);       // POST /api/detalles
router.delete('/:id', detalleController.deleteDetalle);  // DELETE /api/detalles/:id

module.exports = router;