//Ativar Links
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  if (url.includes(link.href)) {
    link.classList.add("ativado");
  }
}
links.forEach(ativarLink);

if (window.SimpleAnime) {
  new SimpleAnime();
}
