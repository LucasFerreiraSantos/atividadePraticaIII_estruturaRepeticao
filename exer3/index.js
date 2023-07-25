const num = Number(prompt('Digite o multiplicando: '));
const interacao = Number(prompt('Digite a quantidade de interações: '));
    for(let i = 1; i <= interacao; i++){
        document.write(`${num} * ${i} = ${num * i}<br>`)
    }
    
// 3. Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...