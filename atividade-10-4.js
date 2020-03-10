const fs = require('fs')
var user = require(`readline-sync`)

var carro = new Object()
carro.cor = cor
carro.modelo = modelo
carro.marca = marca



while (true) {

    var pergunta = user.question("Adicionar novo carro ou exibir: ")

    if (pergunta === 'adicionar') {

        var str = fs.readFileSync('carros.json')
        var listaDeCarros = JSON.parse(str)

        var cor = user.question("Escreva a cor do seu carro: ")
        var modelo = user.question("Agora o modelo: ")
        var marca = user.question("Qual a marca dele? ")

        carro.cor = cor
        carro.modelo = modelo
        carro.marca = marca

        listaDeCarros.push(carro)

        console.log(listaDeCarros)

        var listaSerializada = JSON.stringify(listaDeCarros)
        var caminhoArquivo = 'carros.json'
        fs.writeFileSync(caminhoArquivo, listaSerializada)

    } else if (pergunta === 'exibir') {
        var list = fs.readFileSync('carros.json')
        var carros = JSON.parse(list)
        console.log(carros)
        break
    }
}