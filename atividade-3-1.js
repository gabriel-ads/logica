var user = require(`readline-sync`)
var nBip = parseInt(user.question("Quer quantos 'BIP BIP'?: "))

var contador = 0

while(nBip > contador)
{
console.log("BIP BIP")
contador++
}