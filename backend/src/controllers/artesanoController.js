const Artesano = require('../models/artesanoModel');

// Listar todos
exports.getAllArtesanos = async (req, res) => {
  try {
    const artesanos = await Artesano.getAllArtesanos();
    res.json(artesanos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar por ID
exports.getArtesanoById = async (req, res) => {
  try {
    const artesano = await Artesano.getArtesanoById(req.params.id);
    if (!artesano) {
      return res.status(404).json({ message: 'Artesano no encontrado' });
    }
    res.json(artesano);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nuevo
exports.createArtesano = async (req, res) => {
  try {
    const { nombre_artesano } = req.body;
    if (!nombre_artesano) {
      return res.status(400).json({ message: 'El nombre es obligatorio' });
    }
    const id = await Artesano.createArtesano(nombre_artesano);
    res.status(201).json({ id, nombre_artesano });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.updateArtesano = async (req, res) => {
  try {
    const { nombre_artesano } = req.body;
    await Artesano.updateArtesano(req.params.id, nombre_artesano);
    res.json({ message: 'Artesano actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
exports.deleteArtesano = async (req, res) => {
  try {
    await Artesano.deleteArtesano(req.params.id);
    res.json({ message: 'Artesano eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
