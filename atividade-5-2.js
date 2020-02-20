var user = require(`readline-sync`)
var n1 = user.question("Digite o valor inical: ")
var n2 = user.question("Digite o valor final: ")

for (; true; n1++) {
    if (n1 < n2) {
        console.log(n1)
    }else if(n1>n2){
        console.log("ERRO! Valor final menor que valor inicial.")
        break
    }else{
        console.log(n2)
        break
    }
}
console.log("Fim da contagem")
