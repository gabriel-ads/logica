var user = require(`readline-sync`)

var numero = parseInt(user.question("Insira um numero: "))

if(numero % 2 == 0)
{
    console.log(`O numero ${numero} e PAR.`)
}else
{
 console.log(`O numero ${numero} e IMPAR`)
}
