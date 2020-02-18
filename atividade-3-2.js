var user = require(`readline-sync`)
var n1 = parseInt(user.question("Escreva um numero: "))
var n2 = parseInt(user.question("Escreva outro numero: "))

var num = 0
var soma = 0

while(num < n1)
{
soma += n2
num++
}
console.log(soma)