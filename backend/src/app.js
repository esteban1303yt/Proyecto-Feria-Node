const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rutas
app.use('/api/artesanos', require('./routes/artesanoRoutes'));
app.use('/api/productos', require('./routes/productoRoutes'));
app.use('/api/ventas', require('./routes/ventaRoutes'));
app.use('/api/detalles', require('./routes/detalleVentaRoutes'));

module.exports = app;