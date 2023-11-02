let salarioHomens = 0
let salarioMulheres = 0
continuar = true

while (continuar) {
  salario = Number(prompt('Qual o salário?'))
  sexo = prompt('O salário é pago a um homem ou a uma mulher?\nDigite H para homem e M para mulher')
  if (sexo === "H") {
    salarioHomens += salario
  } else if (sexo === "M") {
    salarioMulheres += salario
  }
  continuar = confirm('Deseja continuar?')
}
document.write(`O salário pago aos homens é de R$${salarioHomens}`)
document.write(`<br> O salário pago as mulheres é de R$${salarioMulheres}`)