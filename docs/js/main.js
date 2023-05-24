
let botonRegresar = document.getElementById('boton-regresar')

function iniciarJuego(){

    alert("Hola, este es nuestro proyecto de Cultura maya, esperamos que lo disfrute:)")

    let sectionJuegos = document.getElementById('juegos')
    sectionJuegos.style.display = 'none'

    let sectionTeam = document.getElementById('team')
    sectionTeam.style.display = 'none'

    //permite mostrar en el bloque la sección de ataque del html que había ocultado.
    let sectionMain = document.getElementById('main')
    sectionMain.style.display = 'flex'

    
    //escucha el click del boton-seleccionar y ejecuta las funciones que pasamos como parámetros
    let botonJuegos = document.getElementById('button-play')
    botonJuegos.addEventListener('click', showJuegos)

    let botonTeam = document.getElementById('button-team')
    botonTeam.addEventListener('click', showTeam)

    let botonRegresar = document.getElementById('boton-regresar')
    botonRegresar.addEventListener('click', regresarAlMain)

    let botonRegresar2 = document.getElementById('boton-regresar2')
    botonRegresar2.addEventListener('click', regresarAlMain)

}

function showJuegos(){
    let sectionMain = document.getElementById('main')
    sectionMain.style.display = 'none'

    let sectionTeam = document.getElementById('team')
    sectionTeam.style.display = 'none'

    let sectionJuegos = document.getElementById('juegos')
    sectionJuegos.style.display = 'flex'

}

function showTeam(){
    let sectionMain = document.getElementById('main')
    sectionMain.style.display = 'none'

    let sectionTeam = document.getElementById('team')
    sectionTeam.style.display = 'flex'

    let sectionJuegos = document.getElementById('juegos')
    sectionJuegos.style.display = 'none'
}

function regresarAlMain(){
    let sectionMain = document.getElementById('main')
    sectionMain.style.display = 'flex'

    let sectionTeam = document.getElementById('team')
    sectionTeam.style.display = 'none'

    let sectionJuegos = document.getElementById('juegos')
    sectionJuegos.style.display = 'none'
}


  

//lee cuando el html esté cargado y ejecuta iniciar juego
window.addEventListener('load', iniciarJuego) 


