var div = document.getElementById("caixaCalculadora");
var numeros = div.getElementsByTagName("div");

for (let i = 0; i < numeros.length; i++) {
  numeros[i].addEventListener("click", calculadora);
}
function calculadora(numero) {
  let caixaConta = document.getElementById("conta");
  let caixaResultado = document.getElementById("resultado");
  switch (numero.target.innerText) {
    case "0":
      caixaConta.innerText += 0;
      break;
    case "1":
      caixaConta.innerText += 1;
      break;
    case "2":
      caixaConta.innerText += 2;
      break;
    case "3":
      caixaConta.innerText += 3;
      break;
    case "4":
      caixaConta.innerText += 4;
      break;
    case "5":
      caixaConta.innerText += 5;
      break;
    case "6":
      caixaConta.innerText += 6;
      break;
    case "7":
      caixaConta.innerText += 7;
      break;
    case "8":
      caixaConta.innerText += 8;
      break;
    case "9":
      caixaConta.innerText += 9;
      break;
    case "C":
      caixaConta.innerText = "";
      caixaResultado.innerText = "";
      break;
    case "=":
        let resultado = eval(caixaConta.innerText);
      if ((caixaConta.innerText == "") || (isFinite(resultado))==false) {
        caixaResultado.innerText = "expressão inválida";
        break;
      } else {
        caixaResultado.innerText = resultado;
        break;
      }
    case "+":
      caixaConta.innerText += "+";
      break;
    case "-":
      caixaConta.innerText += "-";
      break;
    case "*":
      caixaConta.innerText += "*";
      break;
    case "/":
      caixaConta.innerText += "/";
      break;
  }
}
