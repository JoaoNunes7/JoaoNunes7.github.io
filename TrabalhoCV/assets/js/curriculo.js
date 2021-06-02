//Variavies Redes Sociais
var divSociais = document.getElementById("divSociais");
var linksSociais = divSociais.getElementsByTagName("a");
var divSociais2 = document.getElementById("divSociais2");
var linksSociais2 = divSociais2.getElementsByTagName("a");


//Listas skills
var ulTecnicas = document.getElementById("skillsTecnicas");
var skillsTecnicas = ulTecnicas.getElementsByTagName("li");
var ulSoft = document.getElementById("skillsSoft");
var skillsSoft = ulSoft.getElementsByTagName("li");


//Instacimento de varáveis para a parte SOBRE
var imgPerfil = document.getElementById("imgPerfil");
var texto = document.getElementById("demo");
var dataNasc = document.getElementById("dataNasc");
var textWebsite = document.getElementById("site");
var numTel = document.getElementById("numTel");
var cidade = document.getElementById("cidade");



//DECLARCAO DE VARIAVEIS PARA A PARTE DO CURRICULO
var sumarioNome = document.getElementById("sumarioNome");
var sumarioPequenaInt = document.getElementById("sumarioPequenaInt");
var sumarioMorada = document.getElementById("sumarioMorada");
var sumarioCodPostal = document.getElementById("sumarioCodPostal");
var sumarioEmail = document.getElementById("sumarioEmail");

var eduNome = document.getElementById("eduNome");
var eduIntervaloDatas = document.getElementById("eduIntervaloDatas");
var eduNomeInstituicao = document.getElementById("eduNomeInstituicao");
var eduInformacao = document.getElementById("eduInformacao");
var eduAnoEscolaridade = document.getElementById("eduAnoEscolaridade");
var eduDisciplinasGerais = document.getElementById("eduDisciplinasGerais");
var eduLisGerais = eduDisciplinasGerais.getElementsByTagName("li");
var eduDisciplinasTecnicas = document.getElementById("eduDisciplinasTecnicas");
var eduLisTecnicas = eduDisciplinasTecnicas.getElementsByTagName("li");

var estagioPocas = document.getElementById("estagioPocas");
var estagioCromotema = document.getElementById("estagioCromotema");


//CONTACT
var localContact = document.getElementById("localContact");
var emailContact = document.getElementById("emailContact");
var numeroContact = document.getElementById("numeroContact");


//PORTFOLIO
var descricaoPortfolio = document.getElementById("descricaoPortfolio");
var caixas = Array.from(document.getElementsByClassName("prInfo"));

function resultado() {
  fetch("assets/curriculo/cv.json").then((response) => {
    return response.json().then(function (json) {
      //LINKS REDES SOCIAIS
      for(let i = 0; i< linksSociais.length; i++){
        linksSociais[i].href = json.basics.redesSociais[i];
      }
      for(let i = 0; i< linksSociais2.length; i++){
        linksSociais2[i].href = json.basics.redesSociais[i];
      }



      texto.innerText = json.basics.nome;
      dataNasc.innerText = json.basics.nascimento;
      textWebsite.innerText = json.basics.site;
      numTel.innerText = json.basics.telemovel;
      cidade.innerText = json.basics.localizacao.cidade;
      imgPerfil.src = json.basics.picture;


      //SKILLS
      for(let i = 0;i< skillsTecnicas.length;i++){
        skillsTecnicas[i].innerText = json.skills.tecnicas[i];
      }
      for(let i = 0;i< skillsSoft.length;i++){
        skillsSoft[i].innerText = json.skills.soft[i];
      }

      //PARTE DO CURRICULO
      sumarioNome.innerText = json.basics.nome;
      sumarioPequenaInt.innerText = json.basics.sumario;
      sumarioMorada.innerText = json.basics.localizacao.endereço;
      sumarioCodPostal.innerText = json.basics.localizacao.codigopostal;
      sumarioEmail.innerText = json.basics.email;

      eduNome.innerText = json.educacao.area;
      eduIntervaloDatas.innerText =
        json.educacao.dataInicio + " - " + json.educacao.dataFim;
      eduNomeInstituicao.innerText = json.educacao.instituicao;
      eduAnoEscolaridade.innerText = json.educacao.anoEscolaridade;
      eduInformacao.innerText = json.educacao.introducao;
      for (let i = 0; i < eduLisGerais.length; i++) {
        eduLisGerais[i].innerText = json.educacao.disciplinasgerais[i];
      }
      for(let i = 0; i < eduLisTecnicas.length; i++){
        eduLisTecnicas[i].innerText = json.educacao.disciplinastecnicas[i];
      }

      estagioPocas.innerHTML = "<h4>" + json.estagios[0].pocas.nome + "</h4><h5>"+ json.estagios[0].pocas.duracao + "</h5><p><em>" + json.estagios[0].pocas.local + "</em></p>" + "<p>" + json.estagios[0].pocas.experiencia;
      estagioCromotema.innerHTML = "<h4>" + json.estagios[0].cromotema.nome + "</h4><h5>"+ json.estagios[0].cromotema.duracao + "</h5><p><em>" + json.estagios[0].cromotema.local + "</em></p>" + "<p>" + json.estagios[0].cromotema.experiencia;
      
      //PORTFOLIO
      descricaoPortfolio.innerText = json.portfolio.descricao;

        for(let count = 0;count<caixas.length;count++)
          caixas[count].innerHTML = "<h4>" + json.portfolio.projetos[count].nome + "</h4><p>"+ json.portfolio.projetos[count].descricao + "</p><div class=portfolio-links><a href="+json.portfolio.projetos[count].link+" data-gallery='portfolioGallery' class='portfolio-lightbox' title='Web 2'><i class='bx bx-plus'></i></a><a href="+json.portfolio.projetos[count].link2+" class='portfolio-details-lightbox' data-glightbox='type: external' title='Portfolio Details'><i class='bx bx-link'></i></a></div></div>"
      //CONTACT
      localContact.innerText = json.basics.localizacao.cidade;
      emailContact.innerText = json.basics.email;
      numeroContact.innerText = json.basics.telemovel;

    });
  });
}
resultado();
