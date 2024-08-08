function lerTemperatura() {
    let temperaturaF;
    do {
        temperaturaF = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
    } while (isNaN(temperaturaF));
    return temperaturaF;
}

function converterFahrenheitParaCelsius(temperaturaF) {
    return ((temperaturaF - 32) * 5) / 9;
}

function main() {
    const temperaturaF = lerTemperatura();

    const temperaturaC = converterFahrenheitParaCelsius(temperaturaF);

    alert(`A temperatura de ${temperaturaF}° Fahrenheit é igual a ${temperaturaC.toFixed(2)}° Celsius.`);
}

main();
