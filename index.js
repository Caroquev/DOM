/*
OPCION 1
-crear un array vacia
- Declaramos una funcion que tenga la accion siguiente:
a) guardarla URL en el array
b)Mostrar ese array por pantalla
*/

const projects=[];
let imageURL;

function mostrarFotos(){
  imageURL=document.getElementById("urlImage").value;
  projects.push(imageURL);
  for(let i=0; i<projects.length; i++) {
    box.innerHTML+=`
     <div>
      <img src="${projects[i]}">
     </div>
    `
  }
    box.style.display="grid";
    
}

/*const list = []; // creo una lista para q se guarde en el array
​
//creo una funcion que se ejecutara al dar submit (boton)
function subir() { 
    const urlImage = document.getElementById("UrlImage") //url
    const protitle = document.getElementById("input-title");//titulo de la imagen
    const proDescription = document.getElementById("input-description" );//descripcion de la imagen
    const box = document.getElementById("box"); //div de la imagen 
*/


