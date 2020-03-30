var user = require(`readline-sync`)
var pergunta = parseInt(user.question("Escreva 0 para sair ou qualquer outro numero para continuar: "))

while(pergunta != 0 ){
    pergunta = parseInt(user.question("Escreva 0 para sair ou qualquer outro numero para continuar: "))
}

