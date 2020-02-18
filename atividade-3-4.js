var user = require(`readline-sync`)
var n1 = parseInt(user.question("Escreva um numero para voce ver todos os pares antes dele: "))

var num = 1
var show = -1

while (show < n1) {
    show++
    if(show % 2 == 0 ){
        console.log(show)
    }

}