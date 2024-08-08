
function lerNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero));
    return numero;
}


const numero1 = lerNumero("Digite o primeiro número:");
const numero2 = lerNumero("Digite o segundo número:");
const numero3 = lerNumero("Digite o terceiro número:");


let maiorNumero;

if (numero1 >= numero2 && numero1 >= numero3) {
    maiorNumero = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    maiorNumero = numero2;
} else {
    maiorNumero = numero3;
}


console.log(`O maior número é ${maiorNumero}.`);
