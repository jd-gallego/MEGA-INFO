// Información de las rutas
const rutas = [
  { ruta: "Ruta 4", nombre: "Camilo Torres", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta4/ruta4.html" },
  { ruta: "Ruta 5", nombre: "Pablo Sexto", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta5/ruta5.html" },
  { ruta: "Ruta 6", nombre: "Bombay", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta6/ruta6.html" },
  { ruta: "Ruta 7", nombre: "Calle 52", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta7/ruta7.html" },
  { ruta: "Ruta 8", nombre: "La Mariana", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta8/ruta8.html" },
  { ruta: "Ruta 9", nombre: "Pinos 1", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta9/ruta9.html" },
  { ruta: "Ruta 10", nombre: "Bosques 3-4", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta10/ruta10.html" },
  { ruta: "Ruta 11", nombre: "San Diego", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta11/ruta11.html" },
  { ruta: "Ruta 12", nombre: "Boquerón", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta12/ruta12.html" },
  { ruta: "Ruta 13", nombre: "Primavera Azul", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta13/ruta13.html" },
  { ruta: "Ruta 14", nombre: "Playa Rica", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta14/ruta14.html" },
  { ruta: "Ruta 15", nombre: "Pueblo Sol", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta15/ruta15.html" },
  { ruta: "Ruta 16", nombre: "Milán", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta16/ruta16.html" },
  { ruta: "Ruta 17", nombre: "Molivento", imagen: "imagenes/bus.png", link: "RDosquebradas/ruta17/ruta17.html" }
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