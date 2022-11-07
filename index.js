/*
OPCION 1
-crear un array vacia
- Declaramos una funcion que tenga la accion siguiente:
a) guardarla URL en el array
b)Mostrar ese array por pantalla
*/

/*const projects=[];
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
    
}*/

/*const list = []; // creo una lista para q se guarde en el array
​
//creo una funcion que se ejecutara al dar submit (boton)
function subir() { 
    const urlImage = document.getElementById("UrlImage") //url
    const protitle = document.getElementById("input-title");//titulo de la imagen
    const proDescription = document.getElementById("input-description" );//descripcion de la imagen
    const box = document.getElementById("box"); //div de la imagen 
*/

//const list = []; // creo una lista ara q se guarde en el array
​
//creo una funcion que se ejecutara al dar submit (boton)
/*function subir() { 
    const urlImage = document.getElementById("UrlImage") //url
    const protitle = document.getElementById("input-title");//titulo de la imagen
    const proDescription = document.getElementById("input-description" );//descripcion de la imagen
    const box = document.getElementById("box"); //div de la imagen 
​
​
    const proyecto = new project(protitle.value, urlImage.value, proDescription.value)  // se crea objeto con todos los datos
    list.push(proyecto) //  utilizo una vez y guardo en la lista
​
    urlImage.value = '' //eliminar el valor y poner el input en blanco    
    protitle.value = ''
    proDescription.value = ''
    box.innerHTML = ''
​
    for(let i=0 ; i < list.length; i++){ // voy a recorrer cada uno de los objetos (urls) de la lista
​
        //añadir div con imagen a el div padre
        box.innerHTML += `
            <div class="flex flex-wrap w-1/4 w-full p-1 md:p-4 ">                 
                    <img alt="gallery" id="AddImage" onclick="featuredImage(${i})" class="block object-cover object-center w-full h-full rounded-lg  border border-4 border-white hover:border-b-yellow-300"
                    src="${list[i].url}">                                            
            </div>
        `
    }
​
}
​
function featuredImage(position){
​
    const proyecto = list[position]
    
    console.log (proyecto.url)
    const imgshow = document.getElementById("imgshow")
    const ptitle = document.getElementById("ptitle");//titulo de la imagen
    const pDescription = document.getElementById("pdescription" );//descripcion de la imagen
  
​
    ptitle.removeAttribute("hidden");
    pDescription.removeAttribute("hidden");
​
    ptitle.innerHTML = proyecto.title;
    pDescription.innerHTML = proyecto.description;
    imgshow.src = proyecto.url
​
}*/

*
OPCIÓN 1
-Crear un array vacía
-Declaramos una función que tenga la acción siguiente:
a)Guardar la URL en el array
b)Mostrar ese array por pantalla
*/
​
const projects=[];
// let imageURL;
​
function mostrarFotos(){
    imageURL=document.getElementById("urlImage").value;
    projects.push(imageURL);
    for(let i=0;i<projects.length;i++){
        document.getElementById("box").innerHTML+=`
        <div> 
        <img id="estilo" src="${projects[i]}">                                             
        </div>
        `
        document.getElementById("estilo").style.width="500px";
        document.getElementById("estilo").style.height="650px";
    }
​
    }
//OPCIÓN 2
/*function uploadImage(){
// Captura el valor de la url del input Image URL
const imageURL = document.getElementById("urlImage").value;
​
// Crea un nou element <img> amb una propietat
const image = document.createElement("img");
image.setAttribute("src",`${imageURL}`);
​
// Afegeix el nou element al node amb id="grid"
grid.appendChild(image);
}
​
boton.addEventListener("click",uploadImage);*/
