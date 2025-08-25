// Cargar artesanos
async function cargarArtesanos() {
    const res = await fetch("http://localhost:3000/api/artesanos");
    const artesanos = await res.json();

    const lista = document.getElementById("lista-artesanos");
    lista.innerHTML = "";
    artesanos.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a.nombre_artesano;
    lista.appendChild(li);
    });
}

// Cargar productos
async function cargarProductos() {
    const res = await fetch("http://localhost:3000/api/productos");
    const productos = await res.json();

    const lista = document.getElementById("lista-productos");
    lista.innerHTML = "";
    productos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre_producto;
    lista.appendChild(li);
    });
}

// Cargar detalles de ventas
async function cargarDetalles() {
    const res = await fetch("http://localhost:3000/api/detalles");
    const detalles = await res.json();

    const tabla = document.getElementById("tabla-detalles");
    tabla.innerHTML = "";
    detalles.forEach(d => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${d.fecha_venta}</td>
    <td>${d.nombre_artesano}</td>
    <td>${d.nombre_producto}</td>
    <td>${d.cantidad}</td>
    <td>${d.precio}</td>
    `;
    tabla.appendChild(tr);
    });
}

// Llamar a todas las funciones
cargarArtesanos();
cargarProductos();
cargarDetalles();
