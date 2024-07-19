//importando o input
import opcao from 'readline-sync';

//Criando dados dos salarios e inflacao

let salariosInflacao = [
    {salario: 510,  ipca: 5.91,  crecimento: 0, ano: 2010},
    {salario: 545,  ipca: 6.50,  crecimento: 0, ano: 2011},
    {salario: 622,  ipca: 5.84,  crecimento: 0, ano: 2012},
    {salario: 678,  ipca: 5.91,  crecimento: 0, ano: 2013},
    {salario: 724,  ipca: 6.41,  crecimento: 0, ano: 2014},
    {salario: 788,  ipca: 10.67, crecimento: 0, ano: 2015},
    {salario: 880,  ipca: 6.29,  crecimento: 0, ano: 2016},
    {salario: 937,  ipca: 2.95,  crecimento: 0, ano: 2017},
    {salario: 954,  ipca: 3.75,  crecimento: 0, ano: 2018},
    {salario: 998,  ipca: 4.31,  crecimento: 0, ano: 2019},
    {salario: 1045, ipca: 4.52,  crecimento: 0, ano: 2020}
];

//Menu
console.log("ESCOLHA UMA DAS ALTERNATIVAS!");

console.log("1 - Listar os salários minímos de 2010 ate 2020");
console.log("2 - Listar o índice IPCA de 2010 ate 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");


//Pedindo o input para o usuario
let escolha = opcao.question("Digite a numero da sua escolha: ");


//Resultado da escolha 
switch(escolha){
    //Historico Salarial
    case "1":
        for (let salarios of salariosInflacao){
            let salario = salarios.salario;
            let ano = salarios.ano;

            console.log("Ano: ".padEnd(60,"-")+" "+ano);
            console.log("Salário Minímo: ".padEnd(60,"-")+" R$"+salario+",00");
            console.log("\n");
        }
    break;
    //Historico Inflação
    case "2":
        for(let inflacao of salariosInflacao){
            let ipca = inflacao.ipca;
            let ano = inflacao.ano;

            console.log("Ano: ".padEnd(60,"-")+" "+ ano);
            console.log("IPCA: ".padEnd(60,"-")+" "+ipca+"%");
            console.log("\n");
        }
        break;
    case "3":
        let contador = 0;
        for(let dados of salariosInflacao){

            
            let ano = dados.ano ;
            let salarioMinimo = dados.salario;
            let inflacao = dados.ipca;
            let percentualAumento = 0;

            if(dados.ano == 2010){
                percentualAumento = "NaN";
                contador++;
            }
            else{
                //Calculo do percentual de aumento
                let diferenca = dados.salario - salariosInflacao[contador - 1].salario;
                percentualAumento = (diferenca / salariosInflacao[contador-1].salario)*100;
                percentualAumento = percentualAumento.toFixed(2);
                contador++
            }

            console.log("Ano: ".padEnd(60,"-")+" "+ano);
            console.log("Salário Minímo: ".padEnd(60,"-")+" R$" +salarioMinimo+",00");
            console.log("Inflação IPCA: ".padEnd(60,"-")+" "+inflacao+"%");
            console.log("Percentual de Aumento Salarial: ".padEnd(60,"-")+" "+ percentualAumento+"%");
            console.log("\n");
        }
        break;
    default:
        console.log("Alternativa Inválida!");
        break;

}