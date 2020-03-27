var user = require(`readline-sync`)

var nota1 = Number(user.question("Digite a primeira nota: "))
var nota2 = Number(user.question("Digite a segunda nota nota: "))
var nota3 = Number(user.question("Digite a terceira nota: "))

var media  = (nota1 + nota2 + nota3) / 3


if(media >=7){
console.log(`Media: ${media}. ALUNO APROVADO`)
}else{
    console.log(`Media: ${media}. ALUNO REPROVADO`)
}