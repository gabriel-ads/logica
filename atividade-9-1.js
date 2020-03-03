var user = require(`readline-sync`)
var raio= Number(user.question("Qual o raio da sua esfera? "))

function CalculaEsfera(r){

    var esfera = (4/3)*3.14*r**3
    return esfera
}


console.log(CalculaEsfera(raio))