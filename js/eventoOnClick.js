let like = 0;

function meGusta1() {
    like++;
    let numero = document.querySelector(".numero");
    numero.innerText = like;
    alert ("Le diste me gusta al Gato" );
}





let like2 = 0;

function meGusta2() {
    like2++;
    let numero = document.querySelector(".numero2");
    numero.innerText = like2;
    alert ("Le diste me gusta al Golden");
}




function eliminar(elemento){
    elemento.remove();
}

function entrarSalir(elemento_button){
    if (elemento_button.innerText == "Cerrar Sesion"){
        elemento_button.innerText = "Iniciar Sesion";
    }else {
        elemento_button.innerText = "Cerrar Sesion";
    }
}

