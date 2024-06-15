let nombre = prompt("Atleta, ingrese su nombre");
alert("¡Bienvenido "+ nombre + "!");

let kms = Number(prompt("Ingrese la distancia en kms que recorrió"));

while(kms == '' || kms == 0){
    alert("Cantidad de kilometros erronea");
    kms = Number(prompt("Reingrese la distancia en kms que recorrió"));
}

let hs = Number(prompt("Ingrese la cantidad de horas que le tomo realizar el recorrido"));
    
if(hs == ''){
    hs = 0;
}

let min = Number(prompt("Ingrese la cantidad de minutos que le tomo realizar el recorrido"));

if(min == ''){
    min = 0;
}
    

let seg = Number(prompt("Ingrese la cantidad de segundos que le tomo realizar el recorrido"));

if(seg == ''){
    seg = 0;
}

let tiempoTotalEnSegundos = ((hs*3600) + (min*60) + seg);

while(tiempoTotalEnSegundos == 0){
    alert("El tiempo total no puede ser 0, reingrese los datos");
    hs = Number(prompt("Reingrese la cantidad de horas"));
    min = Number(prompt("Reingrese la cantidad de minutos"));
    seg = Number(prompt("Reingrese la cantidad de segundos"));
    tiempoTotalEnSegundos = ((hs*3600) + (min*60) + seg);
}

function kmsToMetros(){
    return kms*1000;
}


let velocidadMS = Math.round(kmsToMetros()/tiempoTotalEnSegundos);  //esta sería la velocidad expresada en m/s.

alert("Velocidad promedio en metros por segundo: " + velocidadMS + "m/s");

function velocidadKMH(velocidadMS){ //esta sería la velocidad expresada en km/h.
    return velocidadMS * 3.6;
}
alert("Velocidad promedio en kilómetros por hora: " + velocidadKMH(velocidadMS) + "km/h");

function velocidadMPH(velocidadMS){
    return velocidadMS * 2.237;
}
alert("Velocidad promedio en millas por hora: "+ velocidadMPH(velocidadMS) + "mph"); //esta sería la velocidad expresada en mph.


