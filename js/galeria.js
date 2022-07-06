const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");
/**
 *
 * @param {MouseEvent} event
 */
function trocarImagem(event) {
  const media = matchMedia("(min-width:920px)").matches;
  if (media) {
    galeriaContainer.prepend(event.currentTarget);
  }
}
function ativarImagem(imagem) {
  imagem.addEventListener("click", trocarImagem);
}
galeria.forEach(ativarImagem);
