var user = require(`readline-sync`)

var poligonoR = Number(user.question("Quantos lados tem seu Poligono Regular? (Min 3/Max 5) "))

var valorLados = Number(user.question("Qual o tamanho em CM dos lados? (Ex: 5) "))
var somaLados = 0
if (poligonoR == 3) {

  somaLados = valorLados * poligonoR
  console.log(`Isso e um Triangulo, com 3 lados medindo ${valorLados}cm cada lado, o tamanho total dos lados e ${somaLados}cm`)

}
if (poligonoR == 4) {

  somaLados = valorLados * poligonoR
  console.log(`Isso e um Quadrado, com 4 lados medindo ${valorLados}cm cada lado, o tamanho total dos lados e ${somaLados}cm`)


}
if (poligonoR == 5) {

  somaLados = valorLados * poligonoR
  console.log(`Isso e um Pentagono, com 5 lados medindo ${valorLados}cm cada lado, o tamanho total dos lados e ${somaLados}cm`)
  
  
}