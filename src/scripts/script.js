function copiarTexto() {

  const emailContent = document.getElementById('email-article');
  const msg = document.createElement('p');

  

  var texto = document.getElementById("email");
  var selecionador = document.createRange();
  selecionador.selectNode(texto);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(selecionador);




  try {
      var sucesso = document.execCommand('copy');
      var mensagem = sucesso ? 'E-mail copiado!' : 'Não foi possível copiar o texto.';

      msg.innerHTML = mensagem;
      emailContent.appendChild(msg);

      setTimeout(function () {
        emailContent.removeChild(msg)
      }, 3000);

  } catch (err) {
      console.log('Erro ao copiar o E-mail: ', err);
  }

  window.getSelection().removeAllRanges();
}