function copiarTexto() {
  var texto = document.getElementById("email");
  var selecionador = document.createRange();
  selecionador.selectNode(texto);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(selecionador);

  try {
      var sucesso = document.execCommand('copy');
      var mensagem = sucesso ? 'E-mail copiado!' : 'Não foi possível copiar o texto.';
      alert(mensagem);
  } catch (err) {
      console.log('Erro ao copiar o E-mail: ', err);
  }

  window.getSelection().removeAllRanges();
}