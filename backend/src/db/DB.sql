-- DROP DATABASE feria_de_artesanos;
CREATE DATABASE IF NOT EXISTS feria_de_artesanos;
USE feria_de_artesanos;

CREATE TABLE artesano(
    id_artesano INT AUTO_INCREMENT PRIMARY KEY,
    nombre_artesano VARCHAR(100)
);

CREATE TABLE venta(
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    id_artesano INT,
	fecha_venta DATE,
    FOREIGN KEY (id_artesano) REFERENCES artesano(id_artesano)
);

CREATE TABLE producto(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(100)
);

CREATE TABLE detalle_venta(
    id_detalle_venta INT AUTO_INCREMENT PRIMARY KEY,
    id_venta INT,
    id_producto INT,
    precio DECIMAL(10,2),
    cantidad VARCHAR(100),
    FOREIGN KEY (id_venta) REFERENCES venta(id_venta),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- Insercción de datos

-- ========================
-- ARTESANOS
-- ========================
INSERT INTO artesano (nombre_artesano) VALUES 
('Juan Pérez'),
('María López'),
('Carlos Gómez');

-- ========================
-- PRODUCTOS
-- ========================
INSERT INTO producto (nombre_producto) VALUES 
('Sombrero Wayuu'),
('Bolso de fique'),
('Collar artesanal'),
('Hamaca tejida'),
('Pulsera de chaquira');

-- ========================
-- VENTAS
-- ========================
-- Venta 1: Juan Pérez en 2025-08-25
INSERT INTO venta (id_artesano, fecha_venta) VALUES
(1, '2025-08-25');

-- Venta 2: María López en 2025-08-26
INSERT INTO venta (id_artesano, fecha_venta) VALUES
(2, '2025-08-26');

-- ========================
-- DETALLE DE VENTAS
-- ========================
-- Venta 1: Juan vendió 2 sombreros y 1 hamaca
INSERT INTO detalle_venta (id_venta, id_producto, precio, cantidad) VALUES
(1, 1, 25000, 2),  -- Sombrero
(1, 4, 80000, 1);  -- Hamaca

-- Venta 2: María vendió 3 bolsos y 5 pulseras
INSERT INTO detalle_venta (id_venta, id_producto, precio, cantidad) VALUES
(2, 2, 40000, 3),  -- Bolso
(2, 5, 5000, 5);   -- Pulsera