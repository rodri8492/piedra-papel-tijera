// iniciando variables y poniendo getters
const estado = document.getElementById("estado");
const output = document.getElementById("output");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");
let opcionElegidaCPU;
let opcionElegidaJugador;

// declarando otros getters y funciones para los puntajes
const outputJugador = document.getElementById("puntaje-jugador");
const outputCPU = document.getElementById("puntaje-cpu");
let puntajeJugador = 0;
let puntajeCPU = 0;



// mostrar los puntajes
outputJugador.setAttribute("value", `${puntajeJugador}`);
outputCPU.setAttribute("value", `${puntajeCPU}`);

// agregando un event listener y una para que el jugador inicie el juego
estado.addEventListener("click", iniciarJuego)
function iniciarJuego(){
    reiniciarEstilosOutput();
    elegirOpcionCPU();
    agregarEventListeners();
}

// preparando la funcion para que la cpu eliga una opcion
function elegirOpcionCPU(){
    // Generar un número aleatorio entre 0 y 2
    const numeroAleatorio = Math.floor(Math.random() * 3);
    // eligiendo la opcion
    if (numeroAleatorio === 0) {
        opcionElegidaCPU = "PIEDRA";
    } else if (numeroAleatorio === 1) {
        opcionElegidaCPU = "PAPEL";
    } else {
        opcionElegidaCPU = "TIJERA";
    }
};

// agregando event listeners a las opciones del jugador
function agregarEventListeners(){
    // creando funcion para remover los event listeners
    function removerEventListeners(){
        piedra.removeEventListener("click", clickPiedra);
        papel.removeEventListener("click", clickPapel);
        tijera.removeEventListener("click", clickTijera);
    };
    piedra.addEventListener("click", clickPiedra)
    function clickPiedra(){
        opcionElegidaJugador = "PIEDRA";
        removerEventListeners();
        verificarGanador();
    };

    papel.addEventListener("click", clickPapel)
    function clickPapel(){
        opcionElegidaJugador = "PAPEL";
        removerEventListeners();
        verificarGanador();
    };

    tijera.addEventListener("click", clickTijera)
    function clickTijera(){
        opcionElegidaJugador = "TIJERA";
        removerEventListeners();
        verificarGanador();
    };
};

// crear funcion para verificar quien  ganó
function verificarGanador(){
    if (opcionElegidaCPU == opcionElegidaJugador){
        output.setAttribute( "value", "Hay un empate")
    }else {
        // Casos donde gana el jugador
        if (opcionElegidaCPU == "TIJERA" && opcionElegidaJugador == "PIEDRA"){
            ganaJugador();
        } else if (opcionElegidaCPU == "PAPEL" && opcionElegidaJugador == "TIJERA"){
            ganaJugador();
        } else if ( opcionElegidaCPU == "PIEDRA" && opcionElegidaJugador == "PAPEL"){
            ganaJugador();
        }
        // Casos donde gana el CPU
        if (opcionElegidaJugador == "TIJERA" && opcionElegidaCPU == "PIEDRA"){
            ganaCPU();
        } else if (opcionElegidaJugador == "PAPEL" && opcionElegidaCPU == "TIJERA"){
            ganaCPU();
        } else if ( opcionElegidaJugador == "PIEDRA" && opcionElegidaCPU == "PAPEL"){
            ganaCPU();
        }
    }
    estadoTerminarJuego();
};
// poniendo de color el output dependiendo de quien gane
function ganaJugador(){
    output.setAttribute("value", "Gana el Jugador");
    output.style.backgroundColor = "#22aa22";
    output.style.color = "#fff";
    puntajeJugador++;
    outputJugador.setAttribute("value", `${puntajeJugador}`);
    actualizarColoresPuntaje();
};

function ganaCPU(){
    output.setAttribute("value", "gana la CPU");
    output.style.backgroundColor = "#f00";
    output.style.color = "#fff";
    puntajeCPU++;
    outputCPU.setAttribute("value", `${puntajeCPU}`);
    actualizarColoresPuntaje();
};

// revisar bien porque no se actualizan los colores


// funcion para reiniciar los estilos
// del output una vez que se reinicie el juego
function reiniciarEstilosOutput(){
    estado.setAttribute("value", "Juego iniciado");
    output.removeAttribute("value", "");
    output.style.backgroundColor = "#fff";
    output.style.color = "#000";
};

function estadoTerminarJuego(){
    estado.setAttribute("value", "Juego terminado, click para volver a jugar");
    estado.style.fontSize = "18px";
};


// funcion para que los colores se actualicen y varíen según quien esté ganando
function actualizarColoresPuntaje(){
    if (puntajeCPU > puntajeJugador){
        outputCPU.style.backgroundColor = "#22aa22";
        outputCPU.style.color= "#fff";
        outputJugador.style.backgroundColor = "#f00";
        outputJugador.style.color = "#fff";
    } else if ( puntajeCPU < puntajeJugador){
        outputCPU.style.backgroundColor = "#f00";
        outputCPU.style.color = "#fff";
        outputJugador.style.backgroundColor = "#22aa22";
        outputJugador.style.color= "#fff";
    }
    else{
        outputCPU.style.backgroundColor = "#fff";
        outputCPU.style.color = "#000"
        outputJugador.style.backgroundColor = "#fff";
        outputJugador.style.color= "#000";
    }
};

