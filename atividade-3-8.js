var user = require(`readline-sync`)
var palavra = user.question("Escreva uma palavra: ")

tamanhoPalavra = palavra.length
i = 0
while (tamanhoPalavra > 0) {
    console.log(palavra.charAt(i))
    i++
    tamanhoPalavra--
}