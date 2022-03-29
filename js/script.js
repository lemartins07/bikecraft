// ATIVAR LINK NO MENU
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
  const href = link.href;
  const url = window.location.href
  
  if (url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// CHECKAR PRODUTO NO ORCAMENTO
const parametros = new URLSearchParams(location.search);

parametros.forEach(parametro => {  
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento){
    elemento.checked = true;
  }  
})

// PERGUNTAS FREQUENTES

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls)
  
  resposta.classList.toggle("ativo");  
  
  const ativo = resposta.classList.contains("ativo");

  pergunta.setAttribute("aria-expanded", ativo)
}

function adicionaEventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta )
}

perguntas.forEach(adicionaEventoPerguntas)

// GALERIA DE IMAGENS

const bicicletas = document.querySelectorAll('.bicicleta-imagens img');
const galeria = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
  const bicicleta = event.currentTarget;    
  const media = matchMedia("(min-width: 470px)").matches;
  
  if (media) {
    galeria.prepend(bicicleta);
  }
}

function adicionarEventoImagens(bicicleta) {
  bicicleta.addEventListener('click', trocarImagem);
}

bicicletas.forEach(adicionarEventoImagens);

// Plugin: SimpleAnime

if (window.SimpleAnime) {
  new SimpleAnime();
}