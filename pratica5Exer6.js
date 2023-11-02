/*
6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m². O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m² = TERRENO POPULAR
Entre 100m² e 500m² = TERRENO MASTER
Acima de 500m² = TERRENO VIP
*/

const largura = Number(prompt("Qual é a largura do terreno(m)?"))
const comprimento = Number(prompt("Qual é o comprimento do terreno(m)?"))
const areaTerreno = (largura * comprimento).toFixed(2)
let tipoTerreno = ""

if (areaTerreno < 100) {
    tipoTerreno = "Terreno Popular"
} else if (areaTerreno >= 200 && areaTerreno <= 500) {
    tipoTerreno = "Terreno Master"    
} else if (areaTerreno > 500) {
    tipoTerreno = "Terreno VIP"
} else {
    tipoTerreno = "Valor inválido --- ERRO"
}

document.write(`O tamanho do seu terreno é: ${areaTerreno}m²<br>`)
document.write(`Classificado como: ${tipoTerreno}`)