// Variables
const agregarCarritoBotones = document.querySelectorAll(".agregar-carrito");
const carrito = document.querySelector(".carrito");
const carritoProductos = document.querySelector(".carrito-productos");
const carritoTotal = document.querySelector(".carrito-total");
const limpiarCarritoBoton = document.querySelector(".limpiar-carrito");

// Eventos
agregarCarritoBotones.forEach((boton) => {
  boton.addEventListener("click", agregarProductoAlCarrito);
});

carrito.addEventListener("click", eliminarProductoDelCarrito);

limpiarCarritoBoton.addEventListener("click", limpiarCarrito);

// Funciones
function agregarProductoAlCarrito(evento) {
  const boton = evento.target;
  const producto = boton.closest(".card");

  const productoTitulo = producto.querySelector(".card-title").textContent;
  const productoPrecio = producto.querySelector(".card-text").textContent;
  const productoImagen = producto.querySelector(".card-img-top").src;

  agregarProductoAlCarritoHTML(productoTitulo, productoPrecio, productoImagen);
}

function agregarProductoAlCarritoHTML(productoTitulo, productoPrecio, productoImagen) {
  const elementoCarrito = document.createElement("div");
  elementoCarrito.classList.add("producto-carrito");
  const contenidoCarrito = `
    <div class="producto-carrito">
      <img src=${productoImagen} alt=${productoTitulo} />
      <div>
        <h4>${productoTitulo}</h4>
        <h5>${productoPrecio}</h5>
        <button class="eliminar-producto">Eliminar</button>
      </div>
    </div>
  `;
  elementoCarrito.innerHTML = contenidoCarrito;
  carritoProductos.appendChild(elementoCarrito);

  calcularTotal();
}

function eliminarProductoDelCarrito(evento) {
  if (evento.target.classList.contains("eliminar-producto")) {
    const botonEliminar = evento.target;
    botonEliminar.closest(".producto-carrito").remove();
    calcularTotal();
  }
}

function limpiarCarrito() {
  while (carritoProductos.firstChild) {
    carritoProductos.removeChild(carritoProductos.firstChild);
  }
  calcularTotal();
}

function calcularTotal() {
  let total = 0;
  const carritoProductos = document.querySelectorAll(".producto-carrito");

  carritoProductos.forEach((producto) => {
    const productoPrecio = producto.querySelector("h5").textContent;
    const precio = parseFloat(productoPrecio.replace("$", ""));
    total = total + precio;
  });

  carritoTotal.textContent = `$${total.toFixed(2)}`;
}
