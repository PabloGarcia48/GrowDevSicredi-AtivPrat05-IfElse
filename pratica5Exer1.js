

let idade = 0;
let contador = 0;
let totalIdade = 0;
while (idade !== 999) {
  idade = Number(prompt("Digite uma idade:\nOu '999' para encerrar"));
  if (idade !== 999) {
    totalIdade += idade;
    contador++;
  }
}
document.write(`Média: ${(totalIdade / contador).toFixed(2)}<br>`)
document.write(`Total de alunos: ${contador}`)