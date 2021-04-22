instance = new dtsel.DTS('input[name="dateTimePicker"]');

var botaoAdicionar = document.getElementById("mais");
var caixaNomeTarefa = document.getElementById("nomeTarefa");
var caixaDataTarefa = document.getElementById("dataTarefa");
var caixaLinhasTarefas = document.getElementById("linhasTarefas");
var botaoValidar = document.getElementById("validar");
botaoValidar.style.display = "none";

botaoAdicionar.addEventListener("click", adicionarTarefa);

var listaTarefas = caixaLinhasTarefas.getElementsByTagName("div");

function adicionarTarefa() {
  let tarefa = caixaNomeTarefa.innerText;
  let data = caixaDataTarefa.value;

  if (tarefa.length > 0 && data.length > 0) {
    caixaLinhasTarefas.innerHTML +=
      "<div class='tarefas'><div class='textoTarefa' onclick='editarTarefa(this)'>" +
      tarefa +
      " (" +
      data +
      ")</div><div id='menos' contentEditable='false' onclick='eliminarTarefa(this)'>-</div></div>";
    let divTarefa = caixaLinhasTarefas.getElementsByClassName ("textoTarefa");
    /*for (let i = 0; i < divTarefa.length; i++) {
      divTarefa[i].addEventListener("click", editarTarefa);
    }*/
    caixaNomeTarefa.innerText = "";
    caixaDataTarefa.value = "";
  }
}
function editarTarefa(element) {
  div = element.parentNode;
  botaoAdicionar.style.display = "none";
  botaoValidar.style.display = "block";
  div.style.backgroundColor = "black";
  div.style.color = "white";
  
  let texto = element.innerText;
  let [nome, data] = texto.split('(');
  data = data.replace(')', '');
  caixaNomeTarefa.innerText = nome;
  caixaDataTarefa.value = data;
  //element.target.setAttribute("contenteditable", true);

  botaoValidar.addEventListener("click", function () {
    let tarefa = caixaNomeTarefa.innerText;
    let data = caixaDataTarefa.value;
    botaoValidar.style.display = "none";
    botaoAdicionar.style.display = "block"
    div.style.backgroundColor = "white";
    div.style.color = "orange";
    div.innerHTML =  "<div class='textoTarefa' onclick='editarTarefa(this)'>" +
    tarefa +
    " (" +
    data +
    ")</div><div id='menos' contentEditable='false' onclick='eliminarTarefa(this)'>-</div>";
  });
}
function eliminarTarefa(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  botaoValidar.style.display = "none"
  botaoAdicionar.style.display = "block"
}