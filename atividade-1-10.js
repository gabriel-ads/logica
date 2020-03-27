var user = require(`readline-sync`)

var numero = Number(user.question("Digite um numero "))

if(numero < 100 || numero > 200){
    console.log('Você digitou um numero fora da faxa entre 100 e 200')
}else{
    console.log('Você digitou um numero entre 100 e 200')
}