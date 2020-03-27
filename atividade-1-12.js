var user = require(`readline-sync`)

var nome = user.question("Digite seu primeiro nome: ")
var sexo = user.question("Sexo M ou F? ")
var estdCivil = user.question("Digite seu estado Civil: ")



if(sexo.toUpperCase() == 'F' && estdCivil.toUpperCase() == 'CASADA'){
var tempoCasada = user.question("Quantos anos casada? ")
console.log(`Legal, você já tem ${tempoCasada} anos de casada. Parabens!`)
}