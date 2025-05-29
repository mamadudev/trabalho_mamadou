document.addEventListener("DOMContentLoaded", function () {
  // Criar o botão
  const button = document.createElement("button");
  button.textContent = "Clique para ver uma mensagem!";

  // Adicionar o botão ao corpo do documento
  document.body.appendChild(button);

  // Criar um parágrafo para a mensagem
  const messageParagraph = document.createElement("p");

  // Adicionar o parágrafo ao corpo do documento, mas inicialmente vazio
  document.body.appendChild(messageParagraph);

  // Adicionar um evento de clique ao botão
  button.addEventListener("click", function () {
    messageParagraph.textContent =
      "Não é sobre perfeição, é sobre evolução, um passo de cada vez 🚀!";
  });
});
