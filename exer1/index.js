let menorAltura = Infinity
let maiorAltura = -Infinity
for (let i = 1; i <= 15; i++) {
    const altura = parseFloat(prompt(`Informe a altura da pessoa ${i}:`))
        if (altura < menorAltura) {
            menorAltura = altura
        }
        if (altura > maiorAltura) {
            maiorAltura = altura
        }
}
document.write(`a. A menor altura do grupo é: ${menorAltura.toFixed(2)} metros.<br>`)
document.write(`b. A maior altura do grupo é: ${maiorAltura.toFixed(2)} metros.`)