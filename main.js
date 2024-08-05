// Funciones de validación de entrada

function pedirDistancia() {
    let kms = document.getElementById("recorrido").value;

        if (kms <= 0 || isNaN(kms)) {
            
            Swal.fire({
                title: 'Cantidad de kilómetros errónea',
                text: 'Por favor ingrese un valor válido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } 

    return kms * 1000; // Convierte a metros y devuelve
}


function pedirTiempo() {
    let tiempoTotalEnSegundos = 0;

    let hs = Number(document.getElementById("horas").value);
    let min = Number(document.getElementById("minutos").value);
    let seg = Number(document.getElementById("segundos").value);

    tiempoTotalEnSegundos = (hs * 3600) + (min * 60) + seg;

    if (tiempoTotalEnSegundos === 0) {
        Swal.fire({
            title: 'El tiempo total no puede ser 0',
            text: 'Por favor ingrese un valor válido',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
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

const atletas = [];
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // Con esto evito que el formulario se envíe y recargue la página.

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const distancia = pedirDistancia();
    const tiempo = pedirTiempo();

    const nuevoAtleta = new Atleta(nombre, apellido, distancia, tiempo);

    atletas.push(nuevoAtleta);


    console.log("Atleta creado:");
    console.log(nuevoAtleta);

    mostrarAtleta(nuevoAtleta);
    mostrarVelocidadesEnDOM(nuevoAtleta);

    console.log("Listado de atletas:");
    for(let i=0; i<atletas.length; i++){
        console.log(atletas[i]);
    }

    const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
    guardarLocal("listadoAtletas",JSON.stringify(atletas));

});



function mostrarVelocidadesEnDOM(atleta){
    document.getElementById("velocidadPromedio").textContent = atleta.velocidadPromedio; 
    document.getElementById("velocidadKMH").textContent = atleta.velocidadKMH;
    document.getElementById("velocidadMPH").textContent = atleta.velocidadMPH;
}

function mostrarAtleta(atleta) {
    const contenedor = document.getElementById('contenedor-atletas');
    const atletaElement = document.createElement('div');

    atletaElement.innerHTML = `
        <h3>${atleta.nombre} ${atleta.apellido}</h3>
        <p>Velocidad en M/S: ${atleta.velocidadPromedio} m/s</p>
        <p>Velocidad en KM/H: ${atleta.velocidadKMH} km/h</p>
        <p>Velocidad en MPH: ${atleta.velocidadMPH} mph</p>
        <hr>
    `;

    contenedor.appendChild(atletaElement);
}

function cargarAtletasDesdeLocalStorage() {
    const atletasStorage = JSON.parse(localStorage.getItem('listadoAtletas'));

    if (atletasStorage) {
        atletasStorage.forEach(atletaData => {
            const atleta = new Atleta(
                atletaData.nombre,
                atletaData.apellido,
                atletaData.distancia,
                atletaData.tiempo
            );

            atletas.push(atleta);
            mostrarAtleta(atleta);
        });
    }
}

window.onload = cargarAtletasDesdeLocalStorage;

 // Función para limpiar el localStorage
 document.getElementById("limpiarStorage").addEventListener("click", function() {
    localStorage.removeItem("listadoAtletas");
    document.getElementById('contenedor-atletas').innerHTML = ''; 
    Swal.fire({
        title: 'Almacenamiento Limpio',
        text: 'Los datos de los atletas han sido eliminados.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});

