var user = require(`readline-sync`)

var ano = parseInt(user.question("Insira seu ano de nascimento: "))

idade = 2020 - ano

if(idade < 17)
{
console.log(`Voce tem ${idade} anos. Seu voto e opcional.`)

}else if (idade >= 18)
{
console.log(`Voce tem ${idade} anos. Seu voto e obrigatorio.`)
}else if (idade >= 65)
{
console.log(`Voce tem ${idade} anos. Seu voto e opcional.`)
}


