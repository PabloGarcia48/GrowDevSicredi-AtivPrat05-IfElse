
let nome = prompt('Digite seu nome')
let genero = prompt('Digite F para feminino e M para Masculino').toUpperCase()
let valorInicial = Number(prompt("Digite valor da compra")).toFixed(2)
valorCompra = valorInicial

if (genero === 'F') {
  valorCompra = (valorCompra * 0.87).toFixed(2)
} else if (genero === 'M') {
  valorCompra = (valorCompra * 0.95).toFixed(2)
} else {
  alert("Caracter inválido")
}

document.write(`Valor da compra sem desconto: R$${valorInicial}<br>`)
document.write(`Porém, ${nome}, o valor de sua compra com desconto é: R$${valorCompra}`)