var pass = 123

var user = require(`readline-sync`)

var userPass = parseInt(user.question("Insira a palavra passe: "))

if(userPass == pass)
{
    console.log(`ACESSO PERMITIDO`)
}else
{
 console.log(`ACESSO NEGADO`)
}