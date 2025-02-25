const links = document.querySelectorAll('.header-menu a')

function ativarLink(link) {
 const url = location.href
 const href = link.href

 if(url.includes(href)) {
  console.log(href)
  link.classList.add('ativo')
 }
}

links.forEach(ativarLink)