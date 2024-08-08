function lerNumero(mensagem) {
    let numero;
    do {
        numero = parseFloat(prompt(mensagem));
    } while (isNaN(numero));
    return numero;
}

function exibirMenu() {
    return prompt(
        `Escolha a opção:\n` +
        `A - Soma de 2 números\n` +
        `B - Diferença entre 2 números (maior pelo menor)\n` +
        `C - Produto entre 2 números\n` +
        `D - Divisão entre 2 números (o denominador não pode ser zero)\n` +
        `Digite a opção:`
    ).toUpperCase();
}

function executarOperacao(opcao, numero1, numero2) {
    switch (opcao) {
        case 'A':
            return `A soma dos números é ${numero1 + numero2}.`;
        case 'B':
            const maior = Math.max(numero1, numero2);
            const menor = Math.min(numero1, numero2);
            return `A diferença entre os números é ${maior - menor}.`;
        case 'C':
            return `O produto dos números é ${numero1 * numero2}.`;
        case 'D':
            if (numero2 === 0) {
                return 'Erro: Divisão por zero não permitida.';
            }
            return `A divisão dos números é ${numero1 / numero2}.`;
        default:
            return 'Opção inválida.';
    }
}

function main() {
    const numero1 = lerNumero("Digite o primeiro número:");
    const numero2 = lerNumero("Digite o segundo número:");

    const opcao = exibirMenu();

    const resultado = executarOperacao(opcao, numero1, numero2);
    alert(resultado);
}

main();
