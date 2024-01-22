

let numero = prompt("Insira um número inteiro entre 1 e 10:");

function tabuada(){
  
if (Number.isInteger(Number(numero)) && numero> 0 && numero < 11) {
  numero = parseInt(numero);

 
  document.write("<br>");
  document.write("<br>");
  document.write("<br>");
  document.write("<big>Tabuada do " + numero + "<br>");
   document.write("<br>");
  
  for (let i = 1; i <= 10; i++) {
    let resultado = numero *i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
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
