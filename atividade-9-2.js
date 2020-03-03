var user = require(`readline-sync`)
var n1 = Number(user.question("Escreva um numero inteiro positivo: "))


var count = 2
function Primo(numero) {
    numero = n1

    while (count < numero) {
        if (n1 % count == 0) {
            
        } else {
        }
        count++
    }

}

console.log(Primo(n1))
