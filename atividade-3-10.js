var user = require(`readline-sync`)
var numero = user.questionInt("Escreva um numero para saber todos os seus divisores: ")

var contador = numero
var i = 0
while(contador >= 0){
    while(numero % i == 0){
        console.log(`Os divisores de ${numero}, sao ${i}`)
    i++
    }
    i++
    contador--
}

