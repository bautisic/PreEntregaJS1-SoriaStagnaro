const numero = parseInt(prompt("Ingrese un número"));

for (let contador = 1; contador <= numero; contador++) {
    if (contador % 2 === 0) {
        switch (contador) {
            case 2:
                console.log("El número es 2");
                break;
            case 4:
                console.log("El número es 4");
                break;
            case 6:
                console.log("El número es 6");
                break;
            default:
                console.log(contador + " es un número par");
                break;
        }
    } else {
        if (contador === 3) {
            console.log("3 es numero primo");
        } else {
            console.log(contador + " es un número impar");
        }
    }
}