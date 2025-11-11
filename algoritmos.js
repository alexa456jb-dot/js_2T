// Suponga que un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después de un mes si el banco paga a razón de 2% mensual.
// let inversion=10000, ganancia=inversion+(inversion*0.02)
// console.log(ganancia)

// //Leer un número e imprimir un mensaje en caso que sea par.
// let numero=[1,2,3,4,5],par=[]
// for(let i;i<=par.length;i++)
//     if (numero[i]%2===0){
//         par.push(numero[i])
//     }

//Elabore un algoritmo que lea un número y si este es mayor o igual a 10 devuelva el triple de este.
// let nuemros=[5,7,10,15,20],triple=[]
// for(let i;i<=nuemros.length;i++){
//     if(nuemros[i]>=10){
//         triple.push(nuemros[i]*3)
//     }
// }

//Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. Determinar cuánto pagará, con IVA incluido (19%), un cliente si la compra cumple con esta condición.
let precio=1000000 , apagar=0
if(precio>=1000000){
    apagar=(precio-(precio*0.10))+(precio*0.19)
}

//Realizar un algoritmo que lea dos números e imprima la suma de los 2, en caso que el primero sea mayor al segundo
let num1=1,num2=2,resultado;
if(num1>num2){
    resultado=num1+num2
}

//En un almacén se hace un 20% de descuento a los clientes cuya compra sea superior a $100.000. ¿Cuánto deberá pagar cada cliente?
let compra=110000,total;
if(compra>100000){
    total=compra-(compra*0.20)
}

//Calcular el salario de un empleado, teniendo en cuenta que si el salario bruto es superior a $2.000.000, debe hacerse una retención del 10%.
let salario=2100000,retencion=true,cantidad;
if(salario>2000000){
    retencion=true
    cantidad=salario*0.10
}else{
    retencion=false
}

//Leer un número e imprimir un mensaje en caso que sea múltiplo de 5.
let num=5;
if (num%5===0){
    console.log("es multiplo");
}else{
    console.log("No es multiplo");
}

//Leer la edad de una persona e imprimir un mensaje en caso que sea mayor de edad.
let edad=19;
if(edad>=18){
    
}