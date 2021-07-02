var divPrincipal = document.getElementById('divPrincipal');
var btnGravar = document.getElementById('btnGravar');
var btnGravarEditar = document.getElementById('btnGravarEditar');
var btnEliminar = document.getElementById('btnEliminar');
var btnReset = document.getElementById('btnReset');
var txtUser = document.getElementById('txtUtilizador');
var txtNome = document.getElementById('txtNome');
var txtPass = document.getElementById('txtPass');
var txtIdade = document.getElementById('txtIdade');
var selectCategoria = document.getElementById('selectCategoria')



btnGravarEditar.style.display = "none";
btnEliminar.style.display = "none";

$.ajax({
    url: './php/lista.php',
    type: 'POST',
    dataType: 'json',
    success: function (response) {
        console.log(response)
        response.utilizadores.forEach(function (utilizador) {

            divPrincipal.innerHTML += "<div class='row' onclick='editar(this)'>" + utilizador.utilizador + " | " + utilizador.nome + " | " + utilizador.idade + " | " + utilizador.nomeCat + "</div>";

        })
    }
})

btnGravar.onclick = function () {
    data = {
        user: txtUser.value,
        nome: txtNome.value,
        pass: txtPass.value,
        idade: txtIdade.value,
        categoria: selectCategoria.value
    }
    $.ajax({
        url: './php/inserir.php',
        type: 'POST',
        data: {
            json: JSON.stringify(data)
        }
    })
}

function editar(element) {
    btnGravar.style.display = "none";
    btnEliminar.style.display = "inline";
    btnGravarEditar.style.display = "inline";
    Array.from(document.getElementsByClassName('row')).forEach(element=>{
        element.style.backgroundColor = "white";
    })
    element.style.backgroundColor = "lightgreen";
    data2 = {
        user: element.innerText.split("|")[0].trim()
    }
    $.ajax({
        url: './php/getUser.php',
        type: 'POST',
        data:{
            json: JSON.stringify(data2)
        },
        dataType: 'json',
        success: function(response){
            txtUtilizador.value = response.utilizador[0].utilizador;
            txtNome.value = response.utilizador[0].nome;
            txtPass.value = response.utilizador[0].password;
            txtIdade.value = response.utilizador[0].idade;
            selectCategoria.value = response.utilizador[0].categoria;

        }
    })

    btnGravarEditar.onclick = function(){
        data =  {
            userAntigo: data2.user,
            user: txtUser.value,
            nome: txtNome.value,
            pass: txtPass.value,
            idade: txtIdade.value,
            categoria: selectCategoria.value

        }
        $.ajax({
            url: './php/editar.php',
            type: 'POST',
            data:{
                json: JSON.stringify(data),
            },
            dataType: 'json'
        })
    }
    btnEliminar.onclick = function(){
        data = {
            userAntigo: data2.user
        }
        $.ajax({
            url: './php/eliminar.php',
            type: 'POST',
            data: {
                json: JSON.stringify(data),
            },
            dataType: 'json'
        })
    }



}

btnReset.onclick = function(){
    btnEliminar.style.display = "none";
    btnGravarEditar.style.display = "none";
    btnGravar.style.display = "inline";
    Array.from(document.getElementsByClassName('row')).forEach(element=>{
        element.style.backgroundColor = "white";
    })
}