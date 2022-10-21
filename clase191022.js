/*let temperatura=prompt(Que temperatura hace fuera?);


    if(temperatura>=10 && <=20){
        window.alert("enciende la calefacción");
    } else if()
    else{
        alert(introduce un numero valido)
    }*/


    /*let personajesStarWar=["Leia", "Luke", "HanSolo"];
     console.log(personajesStarWar);
     retur personajesStarWar;

     function(){
        alert(`Estos personajes son de Star War: ${personajesStarWar}`)
        let nuevoPersonaje=prompt(Que personaje quieres agregar?)
        let personajesTotal= personajesStarWar + nuevoPersonaje;
        console.log (personajesTotal);
     }*/
    alert("************CALCULADORA***********")

    let operacion= prompt("Qué operación quieres hacer: 1- suma ;2- resta ; 3-multiplicación,  4-división; 5-salir" );
  
    let num1=prompt("elige un numero del 0 al 9");
    
    let num2=prompt("elige otro numero del 0 al 9");

     function calculadora(operation,num1,num2){
        
        let result;
        if(operation=="1"){
            result=num1+num2;
        } else if (operation=="2"){
             result=num1-num2;
        } else if (operation=="3"){
           result=num1*num2;
        }else if (operation=="4"){
            result=num1/num2;
        } else if (operation=="5"){
            break;
        }else {
            alert("haremos otro calculo")
        }
     }
