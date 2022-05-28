let palabrita;
let letraErrada = 0;
let letraAcertada = 0;  
const equipos = ['river', 'boca', 'racing', 'estudiantes', 'independiente', 'tigre', 'talleres',
     'huracan', 'patronato', 'velez', 'colon', 'arsenal', 'lanus', 'banfield', 'sanlorenzo', 'platense',
    'union', 'argentinos', 'sarmiento', 'aldosivi', 'belgrano', 'godoycruz', 'gimnasia', 'newells', 'central'];

const btnIniciar = document.getElementById('btnJugar') ;
const imagen = document.getElementById('ahorcado');
const btnLetra = document.querySelectorAll('#letras button');
const btnDesistir = document.getElementById('btnDesistir');

btnDesistir.addEventListener('click', gameOver);
btnIniciar.addEventListener('click', iniciar);

function iniciar(event) {
    imagen.src = 'img/img0.png';
    btnIniciar.disabled = true;
    letraErrada = 0;
    letraAcertada = 0;
    resultado.innerHTML = "";

    const parrafo = document.getElementById('palabra');
    parrafo.innerHTML = '';
    const palabras = equipos.length;
    const random = Math.floor(Math.random()* palabras);
    palabrita = equipos [random];
    const letras = palabrita.length;

    for(let i = 0; i< btnLetra.length ; i++){
        btnLetra[i].disabled = false;
    }

    for(let i = 0; i<letras; i++ ){
        const span = document.createElement ('span');
        parrafo.appendChild(span);
    }
}


for(let i = 0; i< btnLetra.length ; i++){
    btnLetra[i].addEventListener('click', clickLetras);
}

function clickLetras(event){
    const texto = document.querySelectorAll ('#palabra span')
    const boton = event.target;
    boton.disabled = true;
    const letra = boton.innerHTML.toUpperCase();
    const mayuscula = palabrita.toUpperCase();

    let acerto = false;
    for( let i=0; i < mayuscula.length; i++){
        if( letra == mayuscula[i]){
            texto[i].innerHTML = letra;
            letraAcertada++;
            acerto = true;
        }
    }

    if(acerto == false){
        letraErrada++;
        const source = `img/img${letraErrada}.png`;
        imagen.src=source;
    }
    if(letraErrada == 6){
        Swal.fire(
            'Perdiste',
            `El equipo era ${palabrita}`,
            'error'
          );
        gameOver();
    }else if(letraAcertada == palabrita.length){
        Swal.fire(
            'Felicidades!',
            'Ganaste !',
            'success'
          );
        gameOver();
    }
    
}   
function gameOver(){
    for(let i = 0; i< btnLetra.length ; i++){
        btnLetra[i].disabled = true;
    }
    btnIniciar.disabled = false;
}


    

gameOver();