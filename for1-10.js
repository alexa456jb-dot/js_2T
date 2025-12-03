for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i;
}

console.log("La suma es:", suma);


function tabla(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabla(5); 

function contarA(texto) {
    texto = texto.toLowerCase();
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            contador++;
        }
    }

    return contador;
}

console.log(contarA("aslkadksaklAaAa"));



function factorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5)); 


function filtrarPares(array) {
    let resultado = [];

    for (let num of array) {
        if (num % 2 === 0) {
            resultado.push(num);
        }
    }

    return resultado;
}

console.log(filtrarPares([1, 2, 3, 4, 5, 6]));


function sumaCuadrados(n) {
    let suma = 0;

    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }

    return suma;
}

console.log(sumaCuadrados(5));


function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
    }

    return resultado;
}

console.log(potencia(2, 5)); 


function fibonacci(n) {
    let serie = [0, 1];

    for (let i = 2; i < n; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return serie.slice(0, n);
}

console.log(fibonacci(10));


function generarTablas(n) {
    for (let numero = 1; numero <= n; numero++) {
        console.log(`\nTabla del ${numero}`);

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
}

generarTablas(4);


