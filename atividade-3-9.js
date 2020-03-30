var user = require(`readline-sync`)
var palavra = user.question("Escreva uma palavra: ")

tamanhoPalavra = palavra.length
var inverso = ''
var guardaLetra = ''
while (tamanhoPalavra >= 0) {
    guardaLetra = palavra.charAt(tamanhoPalavra)
    inverso = inverso + guardaLetra
    tamanhoPalavra--
}
console.log(inverso)