const inicial = Number(prompt('Insira o valor inicial:'))
const final = Number(prompt('Insira o valor final:'))
const incremento = Number(prompt('Insira o valor de incremento:'))

document.write(`Valor inicial: ${inicial}<br>`)
document.write(`Valor final: ${final}<br>`)
document.write(`Valor do incremento: ${incremento}<br>`)

document.write('Contagem: ')
for (let valor = inicial; valor <= final; valor += incremento) {
    document.write(`${valor} `)
}
document.write("Acabou!")