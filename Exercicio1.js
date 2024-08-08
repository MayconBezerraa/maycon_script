// maycon
function lerNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero));
    return numero;
}


const numero1 = lerNumero("Digite o primeiro número:");
const numero2 = lerNumero("Digite o segundo número:");


const soma = numero1 + numero2;


let mensagem;
if (soma > 100) {
    mensagem = `A soma dos números é ${soma}, que é maior que 100.`;
} else if (soma < 100) {
    mensagem = `A soma dos números é ${soma}, que é menor que 100.`;
} else {
    mensagem = `A soma dos números é ${soma}, que é igual a 100.`;
}


alert(mensagem);
