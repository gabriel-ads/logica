var user = require(`readline-sync`)

var n1 = parseInt(user.question("Escreva um numero: "))
var n2 = parseInt(user.question("Escreva outro numero "))
var n3 = parseInt(user.question("Escreva mais um numero "))

if (n1 >= n2 && n3){
 if(n2>n3){
   console.log(n3)
   console.log(n2)
   console.log(n1)
 }else{
   console.log(n2)
   console.log(n3)
   console.log(n1)
 }
}
if (n2 >= n1 && n3){
  if(n1>n3){
    console.log(n3)
    console.log(n1)
    console.log(n2)
  }else if(n2>n3){
    console.log(n1)
    console.log(n3)
    console.log(n2)
  }else{
    console.log(n1)
    console.log(n2)
    console.log(n3)
  }
 }
