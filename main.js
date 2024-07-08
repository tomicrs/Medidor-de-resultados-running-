// Funciones de validación de entrada

function pedirDistancia() {

    let kms;

    do {

        kms = Number(prompt("Ingrese la distancia en kms que recorrió"));

        if (kms <= 0 || isNaN(kms)) {

            alert("Cantidad de kilómetros errónea, por favor ingrese un valor válido.");

        }

    } while (kms <= 0 || isNaN(kms));

    return kms*1000;

}

function pedirTiempo() {

    let tiempoTotalEnSegundos = 0;

    while (tiempoTotalEnSegundos === 0) {

        let hs = Number(prompt("Ingrese la cantidad de horas que le tomó realizar el recorrido")) || 0;

        let min = Number(prompt("Ingrese la cantidad de minutos que le tomó realizar el recorrido")) || 0;

        let seg = Number(prompt("Ingrese la cantidad de segundos que le tomó realizar el recorrido")) || 0;

        tiempoTotalEnSegundos = (hs * 3600) + (min * 60) + seg;

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
        return (this.velocidadKMH = Math.round((this.distancia / this.tiempo) * 2.2));
    }
   
}

// Código principal

function crearAtleta() {
    const nombre = prompt("Ingresa tu nombre");
    const apellido = prompt("Ingresa tu apellido");
    const distancia = pedirDistancia();
    const tiempo = pedirTiempo();

    return new atleta(nombre, apellido, distancia, tiempo);
}

const atletas = [];

let cantidad = Number(parseInt(prompt("Ingrese la cantidad de registros de atletas que se van a ingresar")));

 for (let i = 1; i <= cantidad ; i++) {
    atletas.push(crearAtleta());
}

console.log(atletas);

for (let i = 0; i < atletas.length; i++) {
    console.log(atletas[i].velocidadPromedio());
    console.log(atletas[i].velocidadKMH());
    console.log(atletas[i].velocidadMPH());
}

// let kms;

// let tiempoTotalEnSegundos;

//let distanciaMetros = kmsToMetros(kms);

// let velocidadMS = calcularVelocidadMS(distanciaMetros, tiempoTotalEnSegundos);

// alert("Velocidad promedio en metros por segundo: " + velocidadMS + " m/s");

// alert("Velocidad promedio en kilómetros por hora: " + velocidadKMH(velocidadMS) + " km/h");

// alert("Velocidad promedio en millas por hora: " + velocidadMPH(velocidadMS) + " mph")