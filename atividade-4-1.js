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
        console.log()
    } else if(n1!=1){
        console.log(`${n1} e sou um numero primo`)
    }
    div = 0
    contador = 1
    n1++

}
