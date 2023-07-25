const quantidadeNumeros = 10
let soma = 0
let quantidadePositivos = 0
let quantidadeNegativos = 0

for (let i = 0; i < quantidadeNumeros; i++) {
  const numero = parseFloat(prompt(`Digite o número ${i + 1}:`))

  soma += numero

  if (numero > 0) {
    quantidadePositivos++
  } else if (numero < 0) {
    quantidadeNegativos++
  }
}

const media = soma / quantidadeNumeros;
const percentualPositivos = (quantidadePositivos / quantidadeNumeros) * 100
const percentualNegativos = (quantidadeNegativos / quantidadeNumeros) * 100

document.write(`Média aritmética: ${media.toFixed(2)}.<br>`)
document.write(`Quantidade de valores positivos: ${quantidadePositivos}.<br>`)
document.write(`Quantidade de valores negativos: ${quantidadeNegativos}.<br>`)
document.write(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%.<br>`)
document.write(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%.`)

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.