'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');



let nombrefinal = "";
let comentariofinal = "";
let newTitulo = "";
let newComentario = "";
let newP = null;
let newH = null;

function recibirNombre(event) {
  event.preventDefault();
  console.log("el formulario se ha enviado correctamente");
  
  //deposito la info en unas variables
  nombrefinal = formulario[0].value;
  comentariofinal = formulario[1].value;

  //creo los atributos html
  newH = document.createElement("H4");
  newP = document.createElement("p");
  
  //paso a texto la info de las variables para poder utilizarlas
  newTitulo = document.createTextNode(nombrefinal);
  newComentario = document.createTextNode(comentariofinal);

  //ingreso el texto dentro de los atributos html creados
  newH.appendChild(newTitulo);
  newP.appendChild(newComentario);

  //ingreso los atributos con contenido dentro de un div ya anteriormente creado en el html
  document.querySelector('.comentarios').appendChild(newH );
  document.querySelector('.comentarios').appendChild(newP );
}



function interceptarNombre(event) {
  
  let nombre = event.target.value;


  if(nombre.length < 5 || nombre.length > 50){
    console.log("El nombre debe ser entre 5 y 50 caracteres");
  }else{
    console.log("valor correcto");
  }
}



formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);

