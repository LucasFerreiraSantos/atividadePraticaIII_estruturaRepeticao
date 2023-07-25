const quantNumeros = 250
    for(let i = 1; i <= quantNumeros; i++){
        if(i % 3 === 0 || i % 5 === 0) {
            document.write(`${i} é múltiplo de 3 ou 5.<br>`)
        }
    }