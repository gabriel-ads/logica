var user = require(`readline-sync`)

var n1 = parseInt(user.question("Escreva um numero: "))
var n2 = parseInt(user.question("Escreva outro numero "))
var n3 = parseInt(user.question("Escreva mais um numero "))

var valorTotal = null
if(n1 >= n2 && n3)
{
  console.log(n1)
  console.log(n2)
  console.log(n3)
}else if (n2 >= n1 && n3)
{
  console.log(n1)
  console.log(n1)
  console.log(n1)
}