const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(`Usuário cadastrado com sucesso!`);
});

