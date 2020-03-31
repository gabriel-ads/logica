var n1 = 1
var contador = 1
var div = 0


while (n1 <= 50) {
    while (true) {
        if (contador <= n1) {
            if (n1 % contador == 0) {
                div++
            }
            contador++
        } else { break }
    }

    if (div >= 3) {
        if (n1 % 2 == 1) {
            console.log(`${n1} Sou IMPAR e NAO um numero PRIMO`)
        }else if(n1 % 2 == 0){
            console.log(`${n1} Sou PAR e NAO um numero PRIMO`)
        }
    } else if (n1 != 1) {
        if (n1 % 2 == 1) {
            console.log(`${n1} Sou IMPAR e SOU um numero PRIMO`)
        }else if(n1 % 2 == 0){
            console.log(`${n1} Sou PAR e SOU um numero PRIMO`)
        }
    }
    div = 0
    contador = 1
    n1++
}
