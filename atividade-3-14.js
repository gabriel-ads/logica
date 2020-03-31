var user = require(`readline-sync`)
var idade = user.questionInt(`Escreva uma idade qualquer: `)

var menoridade = idade
var i = 2
while (i <= 8) {
    idade = user.questionInt(`Escreva uma idade qualquer: `)
    while (menoridade >= idade) {
        menoridade = idade
        break
    }
    i++
}
console.log(`A menor idade inserida foi: ${menoridade}`)