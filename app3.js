// le solicitamos al usuario que ingrese la primer nota
let not1 = prompt("Ingrese la primer nota")
// le solicitamos al usuario que ingrese la segunda nota
let not2 = prompt("Ingrese la segunda nota")
// le solicitamos al usuario que ingrese la tercer nota
let not3 = prompt("Ingrese la tercer nota")

// hacemos la operacion para sacar el promedio de las notas
let promedio = (parseFloat(not1)+parseFloat(not2)+parseFloat(not3))/3
// imprimimos el resultado
alert("El promedio de las notas es " +promedio)
