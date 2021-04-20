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
      "<div class='tarefas'>" +
      tarefa +
      " (" +
      data +
      ")<div id='menos' contentEditable='false' onclick='eliminarTarefa(this)'>-</div></div>";
    let divTarefa = caixaLinhasTarefas.getElementsByTagName("div");
    for (let i = 0; i < divTarefa.length; i++) {
      divTarefa[i].addEventListener("click", editarTarefa);
    }
    caixaNomeTarefa.innerText = "";
    caixaDataTarefa.value = "";
  }
}
function editarTarefa(element) {
  botaoAdicionar.style.display = "none";
  botaoValidar.style.display = "block";
  element.target.style.backgroundColor = "black";
  element.target.style.color = "white";
  //element.target.setAttribute("contenteditable", true);

  botaoValidar.addEventListener("click", function () {
    let tarefa = caixaNomeTarefa.innerText;
    let data = caixaDataTarefa.value;
    botaoValidar.style.display = "none";
    botaoAdicionar.style.display = "block"
    element.target.style.backgroundColor = "white";
    element.target.style.color = "orange";
    element.target.innerHTML =  tarefa + " (" + data + ")<div id='menos' contentEditable='false' onclick='eliminarTarefa(this)'>-</div></div>";
  });
}
function eliminarTarefa(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}