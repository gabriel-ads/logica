var user = require(`readline-sync`)
var numero = user.questionInt(`Escreva um numero: `)

var par = 0
var impar = 1
var i = 1
while (i <= 5) {
    while (numero % 2 == 0) {
        par = numero + par
        numero = user.questionInt(`Escreva um numero: `)
        i++
        break
    }
    while (i <= 5) {
        while (numero % 2 == 1) {
            impar = numero * impar
            i++
            while (i <= 5) {                
                numero = user.questionInt(`Escreva um numero: `)
                break
            }
            break
        }
        break
    }
}
console.log(`Produtos dos impares: ${impar}`)
console.log(`Soma dos pares: ${par}`)