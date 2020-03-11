var user = require(`readline-sync`)

class Aluno{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

var nomeAln1 = user.question("Qual o nome do aluno 1? ")
var idadeAln1 = user.question("Qual a idade do aluno 1? ")


var nomeAln2 = user.question("Qual o nome do aluno 2? ")
var idadeAln2 = user.question("Qual a idade do aluno 2? ")


var nomeAln3 = user.question("Qual o nome do aluno 3? ")
var idadeAln3 = user.question("Qual a idade do aluno 3? ")

var aluno1 = new Aluno(nomeAln1, idadeAln1)
var aluno2 = new Aluno(nomeAln2, idadeAln2)
var aluno3 = new Aluno(nomeAln3, idadeAln3)