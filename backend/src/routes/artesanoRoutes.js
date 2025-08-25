const express = require('express');
const router = express.Router();
const artesanoController = require('../controllers/artesanoController');

// Rutas CRUD
router.get('/', artesanoController.getAllArtesanos);       // GET /api/artesanos
router.get('/:id', artesanoController.getArtesanoById);    // GET /api/artesanos/:id
router.post('/', artesanoController.createArtesano);       // POST /api/artesanos
router.put('/:id', artesanoController.updateArtesano);     // PUT /api/artesanos/:id
router.delete('/:id', artesanoController.deleteArtesano);  // DELETE /api/artesanos/:id

module.exports = router;