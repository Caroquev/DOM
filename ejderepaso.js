/*1-(Funciones) Crea una aplicación que nos convierta una cantidad 
de euros introducida por teclado a otra moneda, estas pueden ser
 a dólares, yenes o libras. El método tendrá como parámetros la 
 cantidad euros y la moneda a pasar que será un string, este no 
 devolverá ningún valor, mostrará un mensaje indicando el cambio.
a. 0.86 libras es 1 euro
b. 1.28611 dólares es 1 euro
c. 129.852 yenes es 1 euro*/

let cant=prompt("Cuanto quieres convertir?");
let moneda=prompt("a que moneda quieres convertir ese dinero? : 1- libras, 2 - dolares, 3- yenes")

function conversion (cant,moneda){
    if(moneda==libras){
        alert((cant*0.86) + "libras");
    } else if (moneda==dolares){
        alert((cant*1.28611)+ "dolares");
    } else if(moneda==yenes){
        alert((cant*129.852)+"yenes");
    }
}