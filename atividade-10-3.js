const fs = require('fs')

var carroSerializado = fs.readFileSync('carro.json')
var carro = JSON.parse(carroSerializado)

console.log(carro)
