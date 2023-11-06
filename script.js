// Função tradicional sem parâmetros
function saudacao() {
    console.log("Bem-vindo à calculadora!");
  }

  // Função tradicional com parâmetros e retorno de valor
function somar(a, b) {
    return a + b;
  }

  // Arrow function com parâmetros e retorno de valor
const subtrair = (a, b) => a - b;

//Chamando as funções

saudacao(); 

const numero1 = 10
const numero2 = 5

const resultadoSoma = somar(numero1, numero2);
console.log(`A soma de ${numero1} e ${numero2} é igual a ${resultadoSoma}`);

const resultadoSubtracao = subtrair(numero1, numero2);
console.log(`A subtração de ${numero1} e ${numero2} é igual a ${resultadoSubtracao}`);