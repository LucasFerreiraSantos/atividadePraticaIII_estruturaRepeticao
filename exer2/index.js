function calcularAnosIgualdade(pedroAlturaInicial, pedroCrescimentoAnual, lucasAlturaInicial, lucasCrescimentoAnual) {
  let anos = 0;
  while (lucasAlturaInicial <= pedroAlturaInicial) {
    pedroAlturaInicial += pedroCrescimentoAnual
    lucasAlturaInicial += lucasCrescimentoAnual
    anos++
  }
  return anos
}

const pedroAlturaInicial = 1.50
const pedroCrescimentoAnual = 0.02

const lucasAlturaInicial = 1.10
const lucasCrescimentoAnual = 0.03

const anosParaIgualdade = calcularAnosIgualdade(pedroAlturaInicial, pedroCrescimentoAnual, lucasAlturaInicial, lucasCrescimentoAnual)
const anosParaLucasMaior = calcularAnosIgualdade(pedroAlturaInicial, pedroCrescimentoAnual, lucasAlturaInicial, lucasCrescimentoAnual)

document.write(`Anos para Lucas e Pedro terem o mesmo tamanho: ${anosParaIgualdade}<br>`)
document.write(`Anos para Lucas ser maior que Pedro: ${anosParaLucasMaior}`)
