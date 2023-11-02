/*
5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.
*/

let distance = Number(prompt("Qual a distância (km) deseja percorrer?"))
let travelCost = 0

if (distance <= 200 && distance >= 0) {
    travelCost = (distance * 0.50).toFixed(2)
} else if (distance > 200) {
    travelCost = (distance * 0.45).toFixed(2)
} else {
    document.write("Valor inválido")
}

document.write(`Percorrendo ${distance}km.<br>O custo final de sua viagem é: R$${travelCost}.`)
