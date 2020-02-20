var user = require(`readline-sync`)
var palavra = user.question("Escreva uma palavra que contenha a letra `A`: ")

var tamanho = palavra.length
var palavra2 = ""

for (var x = 0; x < tamanho; x++) {
    if (palavra.charAt(x) == "a") {
        palavra2 = palavra2 + "A"
    } else{
        palavra2 = palavra2 + palavra.charAt(x)
    }
    console.log(palavra2)
}
console.log(palavra2)
