-- Todas las ventas
SELECT v.id_venta, v.fecha_venta, a.nombre_artesano
FROM venta v
JOIN artesano a ON v.id_artesano = a.id_artesano;

-- Detalles completos de ventas
SELECT dv.id_detalle_venta, v.fecha_venta, a.nombre_artesano, p.nombre_producto, dv.cantidad, dv.precio
FROM detalle_venta dv
JOIN venta v ON dv.id_venta = v.id_venta
JOIN artesano a ON v.id_artesano = a.id_artesano
JOIN producto p ON dv.id_producto = p.id_producto;

-- Total vendido por cada artesano
SELECT a.nombre_artesano, SUM(dv.precio * dv.cantidad) AS total_vendido
FROM detalle_venta dv
JOIN venta v ON dv.id_venta = v.id_venta
JOIN artesano a ON v.id_artesano = a.id_artesano
GROUP BY a.id_artesano, a.nombre_artesano;