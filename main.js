//Simulador interactivo de intereses plazo fijo ,entregable n°2

let respuesta = prompt("¿Desea utilizar el simulador de prestamos? en caso negativo : No")


while(respuesta.toLowerCase() != "no" ){


let montoIngresado = ((prompt("Dinero a ingresar en plazo fijo")))
let meses = ((prompt("Cuantos meses dejara el dinero?"))) 
let porcentaje = ((prompt("Porcentaje  anual del plazo fijo"))) 

const interesMensual = porcentaje/12
let interesDecimal = interesMensual/100


let resultado


class incrementoParcial {
    constructor(meses,incremento){
        this.meses = meses;
        this.incremento = incremento;
    }
}


const evolucionPlazo = [];


if (isNaN(montoIngresado) || isNaN(meses)|| isNaN(porcentaje)) {
    console.log("Al menos uno de los datos ingresados no es válido.");
    alert("Por favor, ingrese valores numéricos válidos.");
}else{
    
    for(let i=1 ; i <= meses ; i++){
    resultado = montoIngresado * Math.pow(1+interesDecimal,i)
    resultado =resultado.toFixed(2)

    evolucionPlazo.push(new incrementoParcial(i,resultado));
   
}
alert(`En el mes ${meses} usted tendá $${resultado}`)
}

if(confirm("¿Desea ver la evolución mes a mes?")==true){
 evolucionPlazo.forEach(item => {
    let mensaje =`
        Mes: ${item.meses}
        Dinero: ${item.incremento}
    `
    alert(mensaje)

 })
}

respuesta = prompt("¿Desea utilizar el simulador de prestamos? en caso negativo : No")

}

alert("Gracias por utilizar nuestro simulador")
