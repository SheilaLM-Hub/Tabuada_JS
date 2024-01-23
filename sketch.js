

let numero = prompt("Insira um número inteiro entre 1 e 10:");// variável numero ira armazenar valor inserido pelo usuário

function tabuada(){
  
if (Number.isInteger(Number(numero)) && numero> 0 && numero < 11) { //irá verificar se o valor inserido é um numero inteiro, maior que 0 e mnor que 11

  numero = parseInt(numero); // o valor inserido em é convertido de string para Int e armazenado na variável numero

 
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
  document.write("<big>Tabuada do " + numero + "<br>");
   document.write("<br>");
  
  for (let i = 1; i <= 10; i++) { //no laço a variavel i recebe o valor que será multiplicado ao valor inserido pelo usuário. enquanto ele for <= 10, receberá mais 1
    let resultado = numero *i; //resultados de cada iteração será a armazenado na variável 
    document.write(numero + " x " + i + " = " + resultado + "<br>"); //irá imprimir na tela o resultado de cada iteração
  }
    document.write("<br>");
    document.write("Para fazer uma nova consulta pressione Enter");
} else {
  alert("Por favor, insira um número inteiro válido. Entre 1 e 10");
  document.write("<big>Para fazer uma nova consulta pressione Enter");
}


}

function setup() {
  createCanvas(0, 0);
}

function draw() {
  background(0);

  
}

tabuada();
