alert("Bienvenido al convertidor de cambio")

let moneda = prompt("Ingrese a que moneda desea cambiar: ") 

function cambio (a,b){
    return a / b
}

if(moneda == 'dolar'){
    let dolar = 385
    let dinero = prompt("Ingrese la cantidad de dinero(en pesos ARS) que desea cambiar: ")
    let resultado = cambio(dinero,dolar);
    alert(resultado)

}else if(moneda == 'real'){
    let real = 70
    let dinero = prompt("Ingrese la cantidad de dinero(en pesos ARS) que desea cambiar: ")
    let resultado = cambio(dinero,real);
    alert(resultado)

}else if(moneda == 'euro'){
    let euro = 200
    let dinero = prompt("Ingrese la cantidad de dinero(en pesos ARS) que desea cambiar: ")
    let resultado = cambio(dinero,euro);
    alert(resultado)

}else {
    alert("NO SE ENCONTRO LA MONEDA")
}
