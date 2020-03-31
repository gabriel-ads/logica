var user = require(`readline-sync`)
var numero = ''


var i = 1
var somador = 0
while(i <= 15){
    numero = user.questionInt(`Escreva um numero para tudo ser somado ${i}/15: `)
    somador = numero + somador
    i++
}
console.log(somador)
