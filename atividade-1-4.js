var maca = 0.30

var user = require(`readline-sync`)

var totalMaca = parseInt(user.question("Qual a quantidade de maca que voce vai comprar? "))

var valorTotal = null
if(totalMaca >= 12)
{
    maca = 0.25
    valorTotal =  totalMaca * 0.25
    console.log(`Comprou ${totalMaca} macas e o preco foi ${valorTotal}`)
}else
{
  valorTotal = totalMaca * maca
 console.log(`Comprou ${totalMaca} macas e o preco foi ${valorTotal}`)
}