var user = require(`readline-sync`)

var num = 1
while (true) {
    while (num % 2 == 1) {
        if (num > 99) {
            break
        }
        console.log(num)
        num++
        if (num % 2 == 0) {
            num++
        }

    }
}