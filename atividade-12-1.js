var user = require(`readline-sync`)

class Carros{
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }
}
var nomeCarro1 = user.question("Qual o nome do teu primeiro carro? ")
var modeloCarro1 = user.question("Qual o modelo do teu primeiro carro? ")
var corCarro1 = user.question("Qual a cor do teu primeiro carro? ")


var nomeCarro2 = user.question("Qual o nome do teu segundo carro? ")
var modeloCarro2 = user.question("Qual o modelo do teu segundo carro? ")
var corCarro2 = user.question("Qual a cor do teu segundo carro? ")

var carro1 = new Carros(nomeCarro1, modeloCarro1, corCarro1)
var carro2 = new Carros(nomeCarro2, modeloCarro2, corCarro2)

if(carro1.nome == carro2.nome && carro1.modelo == carro2.modelo){
    console.log("Dois carros iguais? gastou dinheiro em.")
}
