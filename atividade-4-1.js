var n1 = 1
var divisores = 2
var count = 0
var div = 1
var quemSou = ""
var primo = ""
while (n1 <= 50) {

    if (n1 % 2 == 0) {
        quemSou = " Sou Par"
        while (n1 <= div) {
            if (n1 % div == 0) {
                divisores++
                div++
            }else{
                break
            }
            
        }
        if (divisores > 2) {
            primo = " Não sou Primo"
            console.log(n1 + quemSou + primo)
            divisores = 2
            div = 1
        } else {
            primo = " Sou Primo"
            console.log(n1 + quemSou + primo)
        }

    } else {
        quemSou = " Sou Impar"
        while (n1 <= div) {
            if (n1 % div == 0) {
                divisores++
                div++
            }else{
                break
            }
            
        }
        if (divisores > 2) {
            primo = " Não sou Primo"
            console.log(n1 + quemSou + primo)
            divisores = 2
            div = 1
        } else {
            primo = " Sou Primo"
            console.log(n1 + quemSou + primo)
        }
    }
    n1++
}
