// Generar horarios para las tablas
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

// Llenar las tablas de horarios
function llenarTablas() {
    const horariosSalidaMañana = generarHorarios(5, 6, 11, 59, 16); // Desde las 5:12 AM hasta las 12:12 PM
    const horariosSalidaTarde = generarHorarios(12, 2, 18, 59, 16); // Desde las 12:12 PM hasta las 7:12 PM
    const horariosSalidaNoche = generarHorarios(19, 14, 23, 34, 16); // Desde las 7:12 PM hasta las 11:12 PM

    const horariosLlegadaMañana = generarHorarios(4, 34, 11, 59, 16); // Desde las 6:12 AM hasta las 12:12 PM
    const horariosLlegadaTarde = generarHorarios(12, 2, 18, 59, 16); // Desde las 1:12 PM hasta las 7:12 PM
    const horariosLlegadaNoche = generarHorarios(19, 14, 23, 46, 16); // Desde las 7:12 PM hasta las 11:12 PM

    llenarTabla('tabla-salida', horariosSalidaMañana, horariosSalidaTarde, horariosSalidaNoche);
    llenarTabla('tabla-llegada', horariosLlegadaMañana, horariosLlegadaTarde, horariosLlegadaNoche);
}

// Llenar las tablas de horarios
function llenarTabla(idTabla, horariosMañana, horariosTarde, horariosNoche) {
    const tabla = document.getElementById(idTabla).querySelector('tbody');
    tabla.innerHTML = ''; // Limpiar la tabla antes de llenarla

    const filas = Math.max(horariosMañana.length, horariosTarde.length, horariosNoche.length);

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');

        const celdaMañana = document.createElement('td');
        celdaMañana.textContent = horariosMañana[i] || '';
        fila.appendChild(celdaMañana);

        const celdaTarde = document.createElement('td');
        celdaTarde.textContent = horariosTarde[i] || '';
        fila.appendChild(celdaTarde);

        const celdaNoche = document.createElement('td');
        celdaNoche.textContent = horariosNoche[i] || '';
        fila.appendChild(celdaNoche);

        tabla.appendChild(fila);
    }
}

// Crear alarma
let alarmas = [];

function activarAlarma(hora) {
    const horaAlarma = new Date(hora);
    horaAlarma.setMinutes(horaAlarma.getMinutes() - 5); // Alarma 5 minutos antes

    const idAlarma = setInterval(() => {
        if (new Date() >= horaAlarma) {
            // Mostrar la notificación con el botón de desactivar
            mostrarNotificacion(hora);
            clearInterval(idAlarma); // Detener la alarma después de que suene
        }
    }, 60000); // Comprobar cada minuto

    // Guardar la alarma activada
    alarmas.push({ hora: hora, id: idAlarma });
    actualizarAlarmasActivas();
}

// Mostrar notificación con botón de desactivación
function mostrarNotificacion(hora) {
    const notification = new Notification("¡Alarma activada!", {
        body: `Tu ruta alimentador pronto llegará a tu destino. Hora de llegada: ${hora}`,
        requireInteraction: true // Asegura que el usuario vea la notificación
    });

    notification.onclick = function() {
        // Desactivar la alarma
        desactivarAlarma(hora);
    };

    // Vibración (si es compatible)
    if (navigator.vibrate) {
        navigator.vibrate([1000, 500, 1000]);
    }

    // Sonido
    const audio = new Audio('alarma.mp3');
    audio.loop = true;
    audio.play();

    // Mostrar el botón en la página para desactivar la alarma
    const divAlarmas = document.getElementById('alarmas-activas');
    const alarmItem = document.createElement('li');
    alarmItem.innerHTML = `Alarma: ${hora} <button onclick="desactivarAlarma('${hora}')">Desactivar</button>`;
    divAlarmas.querySelector('ul').appendChild(alarmItem);
}

// Desactivar alarma
function desactivarAlarma(hora) {
    alarmas = alarmas.filter(alarma => alarma.hora !== hora);
    actualizarAlarmasActivas();
}

// Actualizar el cuadro de alarmas activas
function actualizarAlarmasActivas() {
    const listaAlarmas = document.getElementById('lista-alarmas');
    listaAlarmas.innerHTML = ''; // Limpiar la lista antes de actualizarla

    alarmas.forEach(alarma => {
        const li = document.createElement('li');
        li.innerHTML = `Alarma: ${alarma.hora} <button onclick="desactivarAlarma('${alarma.hora}')">Desactivar</button>`;
        listaAlarmas.appendChild(li);
    });
}

// Ejecutar el llenado de las tablas cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    llenarTablas();

    // Agregar evento para activar la alarma al hacer clic en los horarios
    document.querySelectorAll('.tabla-horarios td').forEach(celda => {
        celda.addEventListener('click', () => {
            const hora = celda.textContent;
            if (hora) {
                if (confirm(`¿Deseas activar esta alarma para la hora ${hora}?`)) {
                    activarAlarma(hora);
                }
            }
        });
    });
});