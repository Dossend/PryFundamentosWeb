const container = document.getElementById("productos-container");
const detalles = document.getElementById("producto-detalles");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroDisponibilidad = document.getElementById("filtro-disponibilidad");
const spinner = document.querySelector(".spinner"); 

let indiceActual = 0;
const elementosPorCarga = 15; 
let notificacionMostrada = false;

const agregarNuevaCaja = (producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("producto");

  const img = document.createElement("img");
  img.src = producto.img;
  img.alt = producto.nombre;

  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

  const disponibilidad = document.createElement("p");
  disponibilidad.textContent = `Disponibilidad: ${producto.disponibilidad}`;

  tarjeta.appendChild(img);
  tarjeta.appendChild(nombre);
  tarjeta.appendChild(precio);
  tarjeta.appendChild(disponibilidad);

  tarjeta.addEventListener("click", () => detallesProductos(producto));

  container.appendChild(tarjeta);
};


function mostrarProductos(productos) {
  container.innerHTML = ""; 
  productos.forEach((producto) => {
    const tarjeta = agregarNuevaCaja(producto);
    container.appendChild(tarjeta);
  });
}

function detallesProductos(producto) {
  detalles.innerHTML = ""; 

  const img = document.createElement("img");
  img.src = producto.img;
  img.alt = producto.nombre;

  const nombre = document.createElement("h2");
  nombre.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.textContent = `Precio: $${producto.precio.toLocaleString()}`;

  const disponibilidad = document.createElement("p");
  disponibilidad.textContent = `Disponibilidad: ${producto.disponibilidad}`;

  const codigo = document.createElement("p");
  codigo.textContent = `Código: ${producto.codigo}`;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoría: ${producto.categoria}`;

  const cantidadDisponible = document.createElement("p");
  cantidadDisponible.textContent = `Cantidad Disponible: ${producto.cantidadDisponible}`;

  const inputCantidad = document.createElement("input");
  inputCantidad.type = "number";
  inputCantidad.min = "1";
  inputCantidad.max = producto.cantidadDisponible;
  inputCantidad.placeholder = "Cantidad";

  inputCantidad.oninput = function () {
    if (inputCantidad.value < 1 && inputCantidad.value !== "") {
      inputCantidad.value = 1;
    }
  };

  const botonComprar = document.createElement("button");
  botonComprar.textContent = "Añadir al Carrito🛒";
  botonComprar.classList.add("btn-comprar");

  botonComprar.addEventListener("click", () => {
    const cantidad = parseInt(inputCantidad.value);
    if (cantidad > 0 && cantidad <= producto.cantidadDisponible) {
      alert(`Has añadido ${cantidad} ${producto.nombre} al carrito`);
      window.location.href = "/html/Loader.html?redirect=shoppingCart"; 
    } else {
      alert("Cantidad no válida");
    }
  });

  const botonCancelar = document.createElement("button");
  botonCancelar.textContent = "Cancelar Compra";
  botonCancelar.classList.add("btn-cancelar");
  botonCancelar.addEventListener("click", () => {
    window.location.href = "/html/Loader.html?redirect=Registro"; 
  });

  const botonContenedor = document.createElement("div");
  botonContenedor.id = "boton-contenedor";
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

  detalles.classList.remove("oculto");
}

function filtrarProductos() {
  const categoriaSeleccionada = filtroCategoria.value;
  const disponibilidadSeleccionada = filtroDisponibilidad.value;

  const productosFiltrados = calzado.filter((producto) => {
    const coincideCategoria =
      categoriaSeleccionada === "todos" ||
      producto.categoria === categoriaSeleccionada;
    const coincideDisponibilidad =
      disponibilidadSeleccionada === "todos" ||
      producto.disponibilidad === disponibilidadSeleccionada;

    return coincideCategoria && coincideDisponibilidad;
  });

  container.innerHTML = ""; 
  indiceActual = 0; 
  mostrarProductos(productosFiltrados.slice(indiceActual, elementosPorCarga));
}

const reproducirSonidoNotificacion = () => {
  const audio = new Audio("path/to/your/notification-sound.mp3");
  audio.play();
};

const mostrarNotificacionNoMasElementos = () => {
  if (!notificacionMostrada) {
    const notificacion = document.createElement("div");
    notificacion.className = "notificacion";
    notificacion.innerHTML = `
            <div class="notificacion__contenido">
                <span class="notificacion__emoji">🚫</span>
                <p>No hay más elementos por cargar</p>
            </div>
        `;
    document.body.appendChild(notificacion);
    notificacionMostrada = true; 
    reproducirSonidoNotificacion(); 

    setTimeout(() => {
      notificacion.style.opacity = "0";
      setTimeout(() => notificacion.remove(), 1000); 
    }, 5000);
  }
};

const cargarMasContenido = () => {
  if (indiceActual >= calzado.length) {
    mostrarNotificacionNoMasElementos();
    spinner.style.display = "none"; 
    return;
  }

  const siguientesElementos = calzado.slice(
    indiceActual,
    indiceActual + elementosPorCarga
  );
  siguientesElementos.forEach((producto) => agregarNuevaCaja(producto));
  indiceActual += siguientesElementos.length;

  if (indiceActual >= calzado.length) {
    mostrarNotificacionNoMasElementos();
    spinner.style.display = "none"; 
  }
};

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 5 &&
    !notificacionMostrada
  ) {
    setTimeout(cargarMasContenido, 1000);
  }
});

cargarMasContenido();

function mostrarProductos(productos) {
  productos.forEach((producto) => {
    const tarjeta = agregarNuevaCaja(producto);
    container.appendChild(tarjeta);
  });
}

function playAudio() {
  const audio = document.getElementById("music");
  const gifContainer = document.getElementById("gif-container");

  if (audio.paused) {
    audio.play();
    gifContainer.style.display = "block";
  } else {
    audio.pause();
    gifContainer.style.display = "none"; 
  }
}

function resetFilters() {
  document.getElementById("filtro-categoria").selectedIndex = 0;
  document.getElementById("filtro-disponibilidad").selectedIndex = 0;
  mostrarProductos(calzado); 
}
