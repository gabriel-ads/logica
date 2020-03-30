var user = require(`readline-sync`)
var numero = user.questionInt("Escreva um numero para saber a sua tabuada: ")

var i = 1
divisor = 0
while(i <= 10){
    divisor = numero * i
    console.log(`${numero}x${i}=${divisor}`)
    i++
}
