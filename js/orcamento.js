const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const input = document.getElementById(parametro);
  input.checked = true;
}

parametros.forEach(ativarProduto);
