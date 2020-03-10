var user = require('readline-sync')
var nota = require('notas-universitarias-util')

var g1 = user.questionInt("Qual a sua nota 1: ")
var g2 = user.questionInt("Qual a sua nota 2: ")
var g3 = user.questionInt("Qual a sua nota 3: ")

var mediaUni = { g1, g2, g3 }

nota.default(4).media(mediaUni)

console.log(nota.default(4).media(mediaUni))