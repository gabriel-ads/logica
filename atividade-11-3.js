var user = require('readline-sync')
var calcImc = require('fasam-imc-calc')

var peso = user.questionInt("Qual o seu peso? ")
var altura = Number(user.question("Qual a sua altura? "))

var imc = new calcImc(peso, altura)


console.log(imc.calc())
