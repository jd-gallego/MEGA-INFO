// Información de las rutas
const rutas = [
  { ruta: "Ruta 4", nombre: "Altagracia", imagen: "imagenes/bus.png", link: "RCuba/ruta4/ruta4.html" },
  { ruta: "Ruta 5", nombre: "Cardal-Guayacanes", imagen: "imagenes/bus.png", link: "RCuba/ruta5/ruta5.html" },
  { ruta: "Ruta 6", nombre: "Morelia", imagen: "imagenes/bus.png", link: "RCuba/ruta6/ruta6.html" },
  { ruta: "Ruta 7", nombre: "Mercasa", imagen: "imagenes/bus.png", link: "RCuba/ruta7/ruta7.html" },
  { ruta: "Ruta 8", nombre: "Perla del Sur", imagen: "imagenes/bus.png", link: "RCuba/ruta8/ruta8.html" },
  { ruta: "Ruta 9", nombre: "San Joaquín", imagen: "imagenes/bus.png", link: "RCuba/ruta9/ruta9.html" },
  { ruta: "Ruta 10", nombre: "2500 Lotes", imagen: "imagenes/bus.png", link: "RCuba/ruta10/ruta10.html" },
  { ruta: "Ruta 11", nombre: "Terranova", imagen: "imagenes/bus.png", link: "RCuba/ruta11/ruta11.html" },
  { ruta: "Ruta 12", nombre: "El Dorado", imagen: "imagenes/bus.png", link: "RCuba/ruta12/ruta12.html" },
  { ruta: "Ruta 13", nombre: "Villa Ligia", imagen: "imagenes/bus.png", link: "RCuba/ruta13/ruta13.html" },
  { ruta: "Ruta 14", nombre: "Naranjitos", imagen: "imagenes/bus.png", link: "RCuba/ruta14/ruta14.html" },
  { ruta: "Ruta 15", nombre: "Belmonte", imagen: "imagenes/bus.png", link: "RCuba/ruta15/ruta15.html" },
  { ruta: "Ruta 16", nombre: "Estadio", imagen: "imagenes/bus.png", link: "RCuba/ruta16/ruta16.html" },
  { ruta: "Ruta 17", nombre: "Galicia", imagen: "imagenes/bus.png", link: "RCuba/ruta17/ruta17.html" },
  { ruta: "Ruta 18", nombre: "Cerritos", imagen: "imagenes/bus.png", link: "RCuba/ruta18/ruta18.html" },
  { ruta: "Ruta 19", nombre: "Montelibano", imagen: "imagenes/bus.png", link: "RCuba/ruta19/ruta19.html" },
  { ruta: "Ruta 20", nombre: "Miraflores", imagen: "imagenes/bus.png", link: "RCuba/ruta20/ruta20.html" },
  { ruta: "Ruta 21", nombre: "San Fernando", imagen: "imagenes/bus.png", link: "RCuba/ruta21/ruta21.html" },
  { ruta: "Ruta 22", nombre: "Altavista", imagen: "imagenes/bus.png", link: "RCuba/ruta22/ruta22.html" },
  { ruta: "Ruta 23", nombre: "Estadio II", imagen: "imagenes/bus.png", link: "RCuba/ruta23/ruta23.html" },
  { ruta: "Ruta 24", nombre: "Puerto Caldas", imagen: "imagenes/bus.png", link: "RCuba/ruta24/ruta24.html" },
  { ruta: "Ruta 25", nombre: "Aeropuerto", imagen: "imagenes/bus.png", link: "RCuba/ruta25/ruta25.html" },
  { ruta: "Ruta 26", nombre: "Salamanca", imagen: "imagenes/bus.png", link: "RCuba/ruta26/ruta26.html" },
  { ruta: "Ruta 27", nombre: "UTP", imagen: "imagenes/bus.png", link: "RCuba/ruta27/ruta27.html" },
  { ruta: "Ruta 28", nombre: "La Virginia", imagen: "imagenes/bus.png", link: "RCuba/ruta28/ruta28.html" }
];
  
  // Contenedor donde se agregarán las tarjetas
  const rutasContainer = document.getElementById("rutas-container");
  
  // Generar dinámicamente los cuadros
  rutas.forEach(ruta => {
    const card = document.createElement("div");
    card.className = "ruta-card";
  
    card.innerHTML = `
      <img src="${ruta.imagen}" alt="${ruta.nombre}">
      <h2>${ruta.ruta}</h2>
      <p>${ruta.nombre}</p>
    `;

      // Agregar evento para redirigir al hacer clic
  card.addEventListener("click", () => {
    window.location.href = ruta.link; // Redirige a la página específica
  });
  
    rutasContainer.appendChild(card);
  });