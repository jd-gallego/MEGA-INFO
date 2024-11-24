function generarHorarios(inicioHora, inicioMinuto, finHora, finMinuto, intervaloMinutos) {
    const horarios = [];
    let horaActual = new Date();
    horaActual.setHours(inicioHora, inicioMinuto, 0, 0); // Establecer hora de inicio con minutos específicos
    
    const horaFin = new Date();
    horaFin.setHours(finHora, finMinuto, 0, 0); // Establecer hora de fin con minutos específicos

    // Generar los horarios en intervalos de 12 minutos hasta llegar al límite
    while (horaActual <= horaFin) {
        horarios.push(horaActual.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
        horaActual.setMinutes(horaActual.getMinutes() + intervaloMinutos); // Aumentar en 12 minutos
    }
    return horarios;
}

function llenarTablas() {
    // Definir horarios de salida con horas específicas
    const horariosSalidaMañana = generarHorarios(5, 12, 11, 59, 12); // Desde las 5:12 AM hasta las 12:12 PM
    const horariosSalidaTarde = generarHorarios(12, 0, 18, 59, 12); // Desde las 12:12 PM hasta las 7:12 PM
    const horariosSalidaNoche = generarHorarios(19, 0, 23, 0, 12); // Desde las 7:12 PM hasta las 11:12 PM

    // Definir horarios de llegada con horas diferentes
    const horariosLlegadaMañana = generarHorarios(5, 0, 11, 59, 12); // Desde las 6:12 AM hasta las 12:12 PM
    const horariosLlegadaTarde = generarHorarios(12, 0, 18, 59, 12); // Desde las 1:12 PM hasta las 7:12 PM
    const horariosLlegadaNoche = generarHorarios(19, 0, 23, 12, 12); // Desde las 7:12 PM hasta las 11:12 PM

    // Llenar las tablas con los horarios correspondientes
    llenarTabla('tabla-salida', horariosSalidaMañana, horariosSalidaTarde, horariosSalidaNoche); // Llenar la tabla de salida
    llenarTabla('tabla-llegada', horariosLlegadaMañana, horariosLlegadaTarde, horariosLlegadaNoche); // Llenar la tabla de llegada
}

function llenarTabla(idTabla, horariosMañana, horariosTarde, horariosNoche) {
    const tabla = document.getElementById(idTabla).querySelector('tbody');
    tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla

    const filas = Math.max(horariosMañana.length, horariosTarde.length, horariosNoche.length);

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');

        // Columna de mañana
        const celdaMañana = document.createElement('td');
        celdaMañana.textContent = horariosMañana[i] || ''; // Si no hay horario, dejar vacío
        fila.appendChild(celdaMañana);

        // Columna de tarde
        const celdaTarde = document.createElement('td');
        celdaTarde.textContent = horariosTarde[i] || ''; // Si no hay horario, dejar vacío
        fila.appendChild(celdaTarde);

        // Columna de noche
        const celdaNoche = document.createElement('td');
        celdaNoche.textContent = horariosNoche[i] || ''; // Si no hay horario, dejar vacío
        fila.appendChild(celdaNoche);

        tabla.appendChild(fila);
    }
}

// Ejecutar el llenado de las tablas cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', llenarTablas);
