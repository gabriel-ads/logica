var user = require(`readline-sync`)

var numero = user.question("Digite um numero negativo ou positivo: ")

if(numero<0){
    triplo = numero *3
    console.log(`Voce digitou um numero negaivo, o triplo de ${numero} eh ${triplo} `)
}else{
    dobro = numero *2
    console.log(`Voce digitou um numero positivo, o dobro de ${numero} eh ${dobro} `)
    
}
//FAKTA FAZER