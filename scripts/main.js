import { series } from './data.js';
// Elementos del DOM
var componente = document.getElementById('series');
var componentePromedio = document.getElementById('promedio');
var foto = document.getElementById('imagen');
var titulo = document.getElementById('titulo');
var descripcion = document.getElementById('descripcion');
var enlace = document.getElementById('enlace');
// Cargar filas de la tabla y mostrar promedio de temporadas
cargarFilas();
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
// Crear botones y asignarles eventos de clic
createBotones();
// Función para crear los botones y asignarles eventos de clic
function createBotones() {
    series.forEach(function (serie) {
        var boton = document.getElementById("".concat(serie.id));
        boton.onclick = function () { alterCard(boton.id); };
    });
}
// Función para actualizar la tarjeta de Bootstrap con la información de la serie seleccionada
function alterCard(id) {
    var idR = parseInt(id);
    var serie = series[idR - 1];
    foto.setAttribute('src', serie.imagen);
    titulo.innerHTML = "".concat(serie.nombre);
    descripcion.innerHTML = "".concat(serie.descripcion);
    enlace.setAttribute('href', "".concat(serie.paginaWeb));
    enlace.innerHTML = "".concat(serie.paginaWeb);
}
// Función para cargar las filas de la tabla con la información de las series
function cargarFilas() {
    series.forEach(function (serie) { return crearFila(serie); });
}
// Función para crear una nueva fila en la tabla
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = "\n        <td style=\"font-weight: bold;\"> \n            ".concat(serie.id, "\n        </td>\n        <td style=\"color:#547dde; hover\">\n            <a id=\"").concat(serie.id, "\">").concat(serie.nombre, "</a>\n        </td>\n        <td>\n            ").concat(serie.cadena, "\n        </td>\n        <td>\n            ").concat(serie.temporadas, "\n        </td>");
    componente.appendChild(fila);
}
// Función para calcular el promedio de temporadas de las series
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (serie) { return promedio += serie.temporadas; });
    promedio /= series.length;
    var promedioT = promedio.toFixed(2);
    return promedioT;
}
