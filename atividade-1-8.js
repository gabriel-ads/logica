var user = require(`readline-sync`)

var cmLado1 = Number(user.question("Qual o tamanho do primeiro lado do triangulo? "))
var cmLado2 = Number(user.question("Qual o tamanho do segundo lado do triangulo? "))
var cmLado3 = Number(user.question("Qual o tamanho do terceiro lado do triangulo? "))

if(cmLado1 == cmLado2 && cmLado3){
  console.log("Triângulo Equilátero, tem 3 lados iguais")
}

if(cmLado1 == cmLado2 || cmLado3){
  console.log("Triângulo Isóscele, tem 2 lados iguais")
}

if(cmLado1 != cmLado2 && cmLado3){
  console.log("Triângulo Escaleno, tem 3 lados diferentes")
  
}