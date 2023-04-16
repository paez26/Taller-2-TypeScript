import { Serie } from './series.js';
import { series } from './data.js';

// Elementos del DOM
let componente: HTMLElement = document.getElementById('series')!;
let componentePromedio: HTMLElement = document.getElementById('promedio')!;
let foto: HTMLElement = document.getElementById('imagen')!;
let titulo: HTMLElement = document.getElementById('titulo')!;
let descripcion: HTMLElement = document.getElementById('descripcion')!;
let enlace: HTMLElement = document.getElementById('enlace')!;

// Cargar filas de la tabla y mostrar promedio de temporadas
cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;

// Crear botones y asignarles eventos de clic
createBotones();

// Función para crear los botones y asignarles eventos de clic
function createBotones() {
    series.forEach(serie => {
        let boton = document.getElementById(`${serie.id}`)!;
        boton.onclick = () => { alterCard(boton.id) };
    });
}

// Función para actualizar la tarjeta de Bootstrap con la información de la serie seleccionada
function alterCard(id: string) {
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];
    foto.setAttribute('src', serie.imagen);
    titulo.innerHTML = `${serie.nombre}`;
    descripcion.innerHTML = `${serie.descripcion}`;
    enlace.setAttribute('href', `${serie.paginaWeb}`);
    enlace.innerHTML = `${serie.paginaWeb}`;
}

// Función para cargar las filas de la tabla con la información de las series
function cargarFilas(): void {
    series.forEach(serie => crearFila(serie));
}

// Función para crear una nueva fila en la tabla
function crearFila(serie: Serie): void {
    let fila = document.createElement('tr');
    fila.innerHTML = `
        <td style="font-weight: bold;"> 
            ${serie.id}
        </td>
        <td style="color:#547dde; hover">
            <a id="${serie.id}">${serie.nombre}</a>
        </td>
        <td>
            ${serie.cadena}
        </td>
        <td>
            ${serie.temporadas}
        </td>`;
    componente.appendChild(fila);
}

// Función para calcular el promedio de temporadas de las series
function calcularPromedio(): string {
    let promedio = 0;
    series.forEach(serie => promedio += serie.temporadas);
    promedio /= series.length;
    let promedioT = promedio.toFixed(2);
    return promedioT;
}