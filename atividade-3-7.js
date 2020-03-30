var user = require(`readline-sync`)
var pergunta = user.question("Escreva A para sair ou B para continuar: ")

var n1 = ''
var n2 = ''

var calc = n1 + n2

while (true) {
    while (pergunta.toUpperCase() == 'A') {
        process.exit()
    }    
    while (pergunta.toUpperCase() == 'B') {
        console.log("Legal, agora insira dois numeros para realizar uma soma simples")
        n1 = user.questionInt("Escreva o primeiro numero: ")
        n2 = user.questionInt("Escreva o segundo numero e veja a soma deles: ")
        var calc = n1 + n2
        console.log(`A soma entre ${n1} e ${n2} totaliza ${calc}`)
        pergunta = user.question("Escreva A para sair ou B para continuar: ")
        while (pergunta.toUpperCase() == 'A') {
            process.exit()
        }
    }
    console.log('A letra que voce inseriu nao e valida, favor inserir A ou B')
    pergunta = user.question("Escreva A para sair ou B para continuar: ")
}
