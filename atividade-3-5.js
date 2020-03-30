var user = require(`readline-sync`)
var base = parseInt(user.question("Escreva um numero para ser a base: "))
var potencia = parseInt(user.question("Escreva um numero para ser a potencia: "))

resposta = base
while(potencia > 1){
    resposta = resposta * base
    potencia--
}
console.log(resposta)


