let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Pet Shop Mundo Cão";

let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");

produto.innerHTML = `
  <div>
    <h2>Coleira Camuflada Rosa para Cães</h2>
    <img src="./img/Coleira_Camuflada_Rosa.jpg" alt="Coleira camuflada rosa">
    <p>Procurando controlar a agitação e educar o comportamento de cães em ambientes externos, a Coleira Camuflada Rosa para Cães foi desenvolvida oferecendo conforto e praticidade, com regulagem adaptável ao tamanho do seu pet deixando-o estiloso e seguro em todos os momentos!</p>
    <p id="preco-coleira">R$ 52,70</p>
  </div>
`;

body.appendChild(produto)