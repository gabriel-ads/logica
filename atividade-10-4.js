const fs = require('fs')

var user = require(`readline-sync`)
var pergunta = user.question("Adicionar novo carro ou exibir: ")

var str = fs.readFileSync('carros.json')
var listaDeCarros = JSON.parse(str)


if(pergunta == 'exibir'){
    console.log(listaDeCarros)
}