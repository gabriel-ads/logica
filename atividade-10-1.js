var user = require(`readline-sync`)
var cor = user.question("Escreva a cor do seu carro: ")
var modelo = user.question("Agora o modelo: ")
var marca = user.question("Qual a marca dele? ")

var carro = new Object()
carro.cor = cor
carro.modelo = modelo
carro.marca = marca

var carroSerializado = JSON.stringify(carro)
console.log(carroSerializado)
