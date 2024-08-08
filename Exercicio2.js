
function lerNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero));
    return numero;
}


const numero = lerNumero("Digite um número:");


let resultado;
if (numero % 2 === 0) {
    resultado = `O número ${numero} é par.`;
} else {
    resultado = `O número ${numero} é ímpar.`;
}

console.log(resultado);
