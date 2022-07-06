const perguntas = document.querySelectorAll("dt button");
/**
 *
 * @param {MouseEvent} event
 */
function perguntaClick(event) {
  const pergunta = event.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls")
  );
  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}
function ativarPergunta(pergunta) {
  pergunta.addEventListener("click", perguntaClick);
}
perguntas.forEach(ativarPergunta);
