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
  
  const carrito = [
    {
      producto: {
        nombre: "Guayos Nike Air Zoom Terreno Firme",
        cantidadDisponible: 12,
        precio: 170000,
        img: "https://unitedstorecolombia.com/cdn/shop/files/3d3ce358.jpg?v=1688682903&width=713",
        codigo: "GT-NK-AZ-2024",
        categoria: "Terreno Firme",
        disponibilidad: "En existencia"
      },
      cantidad: 2
    },
    {
      producto: {
        nombre: "Guayos Adidas Speedflow Terreno Firme",
        cantidadDisponible: 7,
        precio: 190000,
        img: "https://unitedstorecolombia.com/cdn/shop/products/7625b8a6.jpg?v=1680125437&width=493",
        codigo: "GT-AD-SF-2024",
        categoria: "Terreno Firme",
        disponibilidad: "En existencia"
      },
      cantidad: 1
    },
    {
      producto: {
        nombre: "Guayos Nike Phantom Terreno Firme",
        cantidadDisponible: 5,
        precio: 260000,
        img: "https://unitedstorecolombia.com/cdn/shop/products/4010b10a.jpg?v=1681749720&width=713",
        codigo: "GT-NK-PH-2024",
        categoria: "Terreno Firme",
        disponibilidad: "En existencia"
      },
      cantidad: 3
    },
    {
      producto: {
        nombre: "Guayos Adidas Predator Mutator Terreno Firme",
        cantidadDisponible: 10,
        precio: 300000,
        img: "https://unitedstorecolombia.com/cdn/shop/files/98b479e9-7fd1-43be-8eba-d41a38942795.jpg?v=1690478594&width=713",
        codigo: "GT-AD-PM-2024",
        categoria: "Terreno Firme",
        disponibilidad: "En existencia"
      },
      cantidad: 1
    },
    {
      producto: {
        nombre: "Guayos Tiempo Legend Terreno Firme",
        cantidadDisponible: 0,
        precio: 260000,
        img: "https://unitedstorecolombia.com/cdn/shop/files/da0f665b.jpg?v=1702760439&width=713",
        codigo: "GT-TL-LG-2024",
        categoria: "Terreno Firme",
        disponibilidad: "Agotado"
      },
      cantidad: 2
    }
  ];
  
  const tablaCarrito = document.getElementById('tabla-carrito').getElementsByTagName('tbody')[0];
  const totalProductosElem = document.getElementById('total-productos');
  const totalPrecioElem = document.getElementById('total-precio');
  const recargoDomicilioElem = document.getElementById('recargo-domicilio');
  
  function actualizarCarrito() {
    tablaCarrito.innerHTML = '';
    let totalProductos = 0;
    let totalPrecio = 0;
  
    carrito.forEach((item, index) => {
      const fila = document.createElement('tr');
  
      const celdaImg = document.createElement('td');
      const img = document.createElement('img');
      img.src = item.producto.img;
      img.alt = item.producto.nombre;
      img.style.width = '50px';
      celdaImg.appendChild(img);
  
      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = item.producto.nombre;
  
      const celdaCategoria = document.createElement('td');
      celdaCategoria.textContent = item.producto.categoria;
  
      const celdaCodigo = document.createElement('td');
      celdaCodigo.textContent = item.producto.codigo;
  
      const celdaPrecio = document.createElement('td');
      celdaPrecio.textContent = `$${item.producto.precio.toLocaleString()}`;
  
      const celdaCantidad = document.createElement('td');
      celdaCantidad.textContent = item.cantidad;
  
      const celdaTotal = document.createElement('td');
      const total = item.producto.precio * item.cantidad;
      celdaTotal.textContent = `$${total.toLocaleString()}`;
  
      const celdaEliminar = document.createElement('td');
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.classList.add('boton-eliminar');
      botonEliminar.addEventListener('click', () => eliminarProducto(index));
      celdaEliminar.appendChild(botonEliminar);
  
      fila.appendChild(celdaImg);
      fila.appendChild(celdaNombre);
      fila.appendChild(celdaCategoria);
      fila.appendChild(celdaCodigo);
      fila.appendChild(celdaPrecio);
      fila.appendChild(celdaCantidad);
      fila.appendChild(celdaTotal);
      fila.appendChild(celdaEliminar);
  
      tablaCarrito.appendChild(fila);
  
      totalProductos += item.cantidad;
      totalPrecio += total;
    });
  
    totalProductosElem.textContent = `Total de Productos: ${totalProductos}`;
    totalPrecioElem.textContent = `Total del Precio: $${totalPrecio.toLocaleString()}`;
    recargoDomicilioElem.textContent = `Recargo por Domicilio: $${calcularRecargoDomicilio(totalPrecio).toLocaleString()}`;
  }
  
  function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
  
  function calcularRecargoDomicilio(totalPrecio) {
    const recargo = 15000; 
    return totalPrecio > 100000 ? 0 : recargo; // MODIFICAR ESTO Este valor se debe sumar al total del costo de la compra.
  }

  document.getElementById('continuar-comprando').addEventListener('click', () => {
    window.location.href = '/html/Loader.html'; // Redirige al Loader con parámetro de redirección
});
  
  document.getElementById('cancelar-compra').addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas cancelar la compra?')) {
      carrito.length = 0; // Vaciar el carrito
      window.location.href = '/html/Loader.html?redirect=Index'; // Redirige al Loader con parámetro de redirección
    }
  });
  
  actualizarCarrito();

  document.getElementById('fecha-expiracion').addEventListener('input', function (e) {
    let value = e.target.value.replace(/[^\d]/g, ''); // Remover cualquier carácter que no sea un número
  
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2); // Insertar una barra después de los dos primeros dígitos
    }
  
    e.target.value = value.slice(0, 5); // Limitar la longitud a 5 caracteres
  });
  
  
  function togglePassword() {
    const cvvInput = document.getElementById('cvv');
    const toggleIcon = document.querySelector('.toggle-password');
  
    if (cvvInput.type === 'password') {
      cvvInput.type = 'text';
      toggleIcon.textContent = '🙈'; // Cambiar icono a "ocultar"
    } else {
      cvvInput.type = 'password';
      toggleIcon.textContent = '👁️'; // Cambiar icono a "ver"
    }
  }
  
  