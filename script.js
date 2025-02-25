// Ativar estilização no menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
 const url = location.href
 const href = link.href

 if(url.includes(href)) {
  link.classList.add('ativo')
 }
}

links.forEach(ativarLink)

// Ativar Items do Orçamento 

const parametro = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro)
  if(elemento) {
    elemento.checked =true
  }
}

parametro.forEach(ativarProduto)
