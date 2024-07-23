// Funciones de validación de entrada

function pedirDistancia() {

    let kms;

    do {

        //kms = Number(prompt("Ingrese la distancia en kms que recorrió"));
        kms = Number(document.getElementById("recorrido"));

        if (kms <= 0 || isNaN(kms)) {

            alert("Cantidad de kilómetros errónea, por favor ingrese un valor válido.");

        }

    } while (kms <= 0 || isNaN(kms));

    return kms*1000;

}


function pedirTiempo() {

    let tiempoTotalEnSegundos = 0;

    while (tiempoTotalEnSegundos === 0) {

        //let hs = Number(prompt("Ingrese la cantidad de horas que le tomó realizar el recorrido")) || 0;
        //let hs = Number(cantHsRecorrido);
        let hs = Number(document.getElementById("horas"));

        //let min = Number(prompt("Ingrese la cantidad de minutos que le tomó realizar el recorrido")) || 0;
        //let min = Number(cantMinRecorrido);
        let min = Number(document.getElementById("minutos"));

        //let seg = Number(prompt("Ingrese la cantidad de segundos que le tomó realizar el recorrido")) || 0;
        //let seg = Number(cantSegRecorrido);
        let seg = Number(document.getElementById("segundos"));

        tiempoTotalEnSegundos = (hs * 3600) + (min * 60) + seg;
        //tiempoTotalEnSegundos = 911;

        if (tiempoTotalEnSegundos === 0) {

            alert("El tiempo total no puede ser 0, reingrese los datos.");

        }

    }

    return tiempoTotalEnSegundos;

}

class atleta{
    constructor(nombre, apellido, distancia, tiempo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.distancia = distancia;
        this.tiempo = tiempo;
        this.velocidadPromedio;
        this.velocidadKMH;
        this.velocidadMPH;
    }
    imprimirAtleta() {
        return `Nombre: ${this.nombre} Apellido: ${this.apellido} Distancia:${this.distancia} Tiempo:${this.tiempo}`;
    }
    velocidadPromedio() {
        return (this.velocidadPromedio = Math.round(this.distancia / this.tiempo));
    }
    velocidadKMH(){
        return (this.velocidadKMH = Math.round(this.distancia / this.tiempo) * 3.6);
    }
    velocidadMPH(){
        return (this.velocidadMPH = Math.round((this.distancia / this.tiempo) * 2.2));
    }
   
}

// Código principal

function crearAtleta() {
    //const nombre = prompt("Ingresa tu nombre");
    //const apellido = prompt("Ingresa tu apellido");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    //const distancia = pedirDistancia(); //si dejo esta linea me muestra que la cant de km es erronea.
    const distancia = document.getElementById("recorrido"); //si dejo esta linea 
    const tiempo = pedirTiempo();

    return new atleta(nombre, apellido, distancia, tiempo);
}

const atletas = [];

let cantidad = Number(parseInt(prompt("Ingrese la cantidad de registros de atletas que se van a ingresar")));

 for (let i = 0; i <= cantidad ; i++) {
    atletas.push(crearAtleta());
}

console.log("Las velocidades de los atletas en KM/H son:");
atletas.forEach( (atleta) => {console.log(atleta.nombre), console.log(atleta.velocidadKMH(), "km/h") } );

console.log("Las velocidades de los atletas en M/S son:");
atletas.forEach( (atleta) => {console.log(atleta.nombre), console.log(atleta.velocidadPromedio(), "m/s") } );

console.log("Las velocidades de los atletas en MPH son:");
atletas.forEach( (atleta) => {console.log(atleta.nombre) , console.log(atleta.velocidadMPH(), "mph") } );

// const inputNombre = document.getElementById("nombre");
// const inputApellido = document.getElementById("apellido");

// inputNombre.addEventListener("change", () =>{
//     console.log(inputNombre.value);
// });

// inputApellido.addEventListener("change", () =>{
//     console.log(inputApellido.value);
// });

// Del siguiente modo me ahorro realizar un addEventListener por cada input, solo agrego uno y la información se muestra
//cuando el formulario se completa.
const formulario = document.getElementById("formulario");

//const nombreForm = document.getElementById("nombre");
//const apellidoForm = document.getElementById("apellido");
const distanciaRecorrida = document.getElementById("recorrido");
const cantHsRecorrido = document.getElementById("horas");
const cantMinRecorrido = document.getElementById("minutos");
const cantSegRecorrido = document.getElementById("segundos");

const boton = document.getElementById("btn");
btn.addEventListener('click', () => {
    alert("Calculando velocidades");
});


formulario.addEventListener("submit", (e) =>{
    e.preventDefault(); //esto es para evitar que la pagina se actualice tan rapido y los datos permanezcan en la consola.
    console.log(nombre.value); //toma bien el valor, es el que se ingresa por teclado.
    console.log(apellido.value); //toma bien el valor, es el que se ingresa por teclado.
    console.log(distancia.value); //no toma bien el valor, no es el valor distancia del atleta que se ingtesa por teclado.
    console.log(cantHsRecorrido.value); // no toma bien el valor
    console.log(cantMinRecorrido.value); // no toma bien el valor
    console.log(cantSegRecorrido.value); // no toma bien el valor
});

//tanto pedirDistancia() y pedirTiempo() no están funcionando para el DOM, es como que se ejecutan las funciones 
//antes de que se ingresen valores y toma 0 como dato de retorno en ambas.