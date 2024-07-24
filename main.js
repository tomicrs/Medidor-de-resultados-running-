//FUNCIONES DE VALIDACION DE ENTRADA

function pedirDistancia() {
    let kms;

    do {
        kms = document.getElementById("recorrido").value;

        if (kms <= 0 || isNaN(kms)) {
            alert("Cantidad de kilómetros errónea, por favor ingrese un valor válido.");
        }

    } while (kms <= 0 || isNaN(kms));

    return kms * 1000; // Convierte a metros y devuelve.
}


function pedirTiempo() {
    let tiempoTotalEnSegundos = 0;

    while (tiempoTotalEnSegundos === 0) {
        let hs = Number(document.getElementById("horas").value);
        let min = Number(document.getElementById("minutos").value);
        let seg = Number(document.getElementById("segundos").value);

        tiempoTotalEnSegundos = (hs * 3600) + (min * 60) + seg;

        if (tiempoTotalEnSegundos === 0) {
            alert("El tiempo total no puede ser 0, reingrese los datos.");
        }
    }

    return tiempoTotalEnSegundos;
}

class Atleta {
    constructor(nombre, apellido, distancia, tiempo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.distancia = distancia;
        this.tiempo = tiempo;
        this.velocidadPromedio = this.calcularVelocidadPromedio();
        this.velocidadKMH = this.calcularVelocidadKMH();
        this.velocidadMPH = this.calcularVelocidadMPH();
    }

    calcularVelocidadPromedio() {
        return Math.round(this.distancia / this.tiempo);
    }

    calcularVelocidadKMH() {
        return Math.round((this.distancia / this.tiempo) * 3.6);
    }

    calcularVelocidadMPH() {
        return Math.round((this.distancia / this.tiempo) * 2.237); // Conversión de m/s a mph
    }
}

// Código principal

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Con esto evito que el formulario se envíe y recargue la página.

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const distancia = pedirDistancia();
    const tiempo = pedirTiempo();

    const nuevoAtleta = new Atleta(nombre, apellido, distancia, tiempo);

    console.log("Atleta creado:");
    console.log(nuevoAtleta);

    mostrarAtleta(nuevoAtleta);
    mostrarVelocidadesEnDOM(nuevoAtleta);
});

function mostrarVelocidadesEnDOM(atleta){
    document.getElementById("velocidadPromedio").textContent = atleta.velocidadPromedio;
    document.getElementById("velocidadKMH").textContent = atleta.velocidadKMH;
    document.getElementById("velocidadMPH").textContent = atleta.velocidadMPH;
}

function mostrarAtleta(atleta) {
    console.log("Velocidades calculadas:");
    console.log(`Nombre: ${atleta.nombre} ${atleta.apellido}`);
    console.log(`Velocidad en M/S: ${atleta.velocidadPromedio} m/s`);
    console.log(`Velocidad en KM/H: ${atleta.velocidadKMH} km/h`);
    console.log(`Velocidad en MPH: ${atleta.velocidadMPH} mph`);
}