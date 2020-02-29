var user = require(`readline-sync`)

var altura = Number(user.question("Digite sua altura "))
var valor2 = user.question("Voce e um homem? (s ou n) ")

var pesoIdeal = null
if (valor2 == "s" ) {
  pesoIdeal = (72.7 * altura) - 58
  console.log(`Com base na sua altura, para um Homem, o peso ideal e ${pesoIdeal}`)
} else {
  pesoIdeal = (62.1 * altura) - 44.7
  console.log(`Com base na sua altura, para uma Mulher, o peso ideal e ${pesoIdeal}`)
}