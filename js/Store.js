const container = document.getElementById('productos-container');
const detalles = document.getElementById('producto-detalles');
const filtroCategoria = document.getElementById('filtro-categoria');
const filtroDisponibilidad = document.getElementById('filtro-disponibilidad');

                                                            // Función para crear la tarjeta del producto
function tarjetaProducto(producto) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('producto');

    const img = document.createElement('img');
    img.src = producto.img;
    img.alt = producto.nombre;

    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

    const disponibilidad = document.createElement('p');
    disponibilidad.textContent = `Disponibilidad: ${producto.disponibilidad}`;

    tarjeta.appendChild(img);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(disponibilidad);

    // Añadir evento de clic a la tarjeta
    tarjeta.addEventListener('click', () => detallesProductos(producto));

    return tarjeta;
}

                                                        // Función para mostrar los productos en la sección principal
                                                        
function mostrarProductos(productos) {
    container.innerHTML = ''; // Limpiar contenedor
    productos.forEach(producto => {
        const tarjeta = tarjetaProducto(producto);
        container.appendChild(tarjeta);
    });
}

                                                        // Función para mostrar los detalles del producto
function detallesProductos(producto) {
    detalles.innerHTML = ''; // Limpiar detalles anteriores

    const img = document.createElement('img');
    img.src = producto.img;
    img.alt = producto.nombre;

    const nombre = document.createElement('h2');
    nombre.textContent = producto.nombre;

    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

    const disponibilidad = document.createElement('p');
    disponibilidad.textContent = `Disponibilidad: ${producto.disponibilidad}`;

    const codigo = document.createElement('p');
    codigo.textContent = `Código: ${producto.codigo}`;

    const categoria = document.createElement('p');
    categoria.textContent = `Categoría: ${producto.categoria}`;

    const cantidadDisponible = document.createElement('p');
    cantidadDisponible.textContent = `Cantidad Disponible: ${producto.cantidadDisponible}`;

    const inputCantidad = document.createElement('input');
    inputCantidad.type = 'number';
    inputCantidad.min = '1';
    inputCantidad.max = producto.cantidadDisponible;
    inputCantidad.placeholder = 'Cantidad';

    inputCantidad.oninput = function () {
        if (inputCantidad.value < 1 && inputCantidad.value !== '') {
            inputCantidad.value = 1;
        }
    };

    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Añadir al Carrito🛒';
    botonComprar.classList.add('btn-comprar');

    botonComprar.addEventListener('click', () => {
        const cantidad = parseInt(inputCantidad.value);
        if (cantidad > 0 && cantidad <= producto.cantidadDisponible) {
            alert(`Has añadido ${cantidad} ${producto.nombre} al carrito`);
            window.location.href = '/html/Loader.html?redirect=shoppingCart'; // Redirige al Loader con parámetro de Compras
        } else {
            alert('Cantidad no válida');
        }

    });

    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'Cancelar Compra';
    botonCancelar.classList.add('btn-cancelar');
    botonCancelar.addEventListener('click', () => {
        window.location.href = '/html/Loader.html?redirect=Registro'; // Redirige al Loader con parámetro de redirección
    });

    const botonContenedor = document.createElement('div');
    botonContenedor.id = 'boton-contenedor';
    botonContenedor.appendChild(botonComprar);
    botonContenedor.appendChild(botonCancelar);

    detalles.appendChild(img);
    detalles.appendChild(nombre);
    detalles.appendChild(precio);
    detalles.appendChild(disponibilidad);
    detalles.appendChild(codigo);
    detalles.appendChild(categoria);
    detalles.appendChild(cantidadDisponible);
    detalles.appendChild(inputCantidad);
    detalles.appendChild(botonContenedor);

    detalles.classList.remove('oculto'); // Mostrar la sección de detalles
}

                                                            // Función para filtrar productos
function filtrarProductos() {
    const categoriaSeleccionada = filtroCategoria.value;
    const disponibilidadSeleccionada = filtroDisponibilidad.value;

    const productosFiltrados = calzado.filter(producto => {
        const coincideCategoria = categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada;
        const coincideDisponibilidad = disponibilidadSeleccionada === 'todos' || producto.disponibilidad === disponibilidadSeleccionada;

        return coincideCategoria && coincideDisponibilidad;
    });

    mostrarProductos(productosFiltrados);
}

                                                            // Agregar eventos a los filtros
filtroCategoria.addEventListener('change', filtrarProductos);
filtroDisponibilidad.addEventListener('change', filtrarProductos);

                                                            // Mostrar todos los productos al cargar la página
mostrarProductos(calzado);

function playAudio() {

    const audio = document.getElementById("music");
    const gifContainer = document.getElementById("gif-container");
  
    if (audio.paused) {
      audio.play();
      gifContainer.style.display = "block"; // Muestra el GIF
    } else {
      audio.pause();
      gifContainer.style.display = "none"; // Oculta el GIF
    }
  
  }

function resetFilters() {
    document.getElementById('filtro-categoria').selectedIndex = 0;
    document.getElementById('filtro-disponibilidad').selectedIndex = 0;
    mostrarProductos(calzado); // Mostrar todos los productos
}

                                                            // Scroll Infinito


