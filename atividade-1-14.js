var user = require(`readline-sync`)

var n1 = user.questionInt("Informe um numero: ")
var n2 = user.questionInt("Informe outro numero: ")


if(n1%n2==0){
console.log(`${n1} e divisivel por ${n2} `)
}else{
    console.log(`${n1} não e divisivel por ${n2} `)
}
