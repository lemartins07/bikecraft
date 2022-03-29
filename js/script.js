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
  console.log(parametro);
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento){
    elemento.checked = true;
  }  
})