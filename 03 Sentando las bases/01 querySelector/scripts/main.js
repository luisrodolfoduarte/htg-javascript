
//El 1
const favorito = document.querySelector(".comment");

favorito.classList.add("comentarioFav");


//Ej 2
const linea = document.querySelectorAll("hr");

for(let i = 0; i<linea.length; i++){
    linea[i].classList.add("cambiarLinea");
}


//Ej 3

const comentarios = document.querySelectorAll(".comment--text");


for(let i = 0; i<comentarios.length; i++){

    if(comentarios[i].innerText.length>50){
        comentarios[i].classList.add("comment--ocultarComentario");
    }

}



//Ej 4
let contador = null;
let mayor = 0;
for(let x = 0; x<comentarios.length; x++){
    
    if(comentarios[x].innerText.length>mayor){
        
        mayor = comentarios[x].innerText.length;
        contador = x;
    }
    
}

comentarios[contador].classList.add("comentarioMayor");
