
function verificarNomes(event) {
event.preventDefault();

console.log("text")

let lista = ["Elias", "Maria", "joão", "Ana"];

 let nome = document.getElementById("nome").value.trim();
 let email = document.getElementById("email").value.trim();
 let idade = document.getElementById("idade").value.trim();

 let mensagem = document.getElementById("mensagem");


let listaMaiuscula = lista.map(n => n.toUpperCase());
let nomeMaiusculo = nome.toUpperCase();

  if (!nome || !email || !idade) {
    mensagem.textContent = "Por favor, preencha todos os campos corretamente.";
    mensagem.style.color = "red"
  } if (listaMaiuscula.includes(nomeMaiusculo)) {
    mensagem.textContent = `Você está na lista!.Temos atualmente ${listaMaiuscula.length} cadastrados`
    mensagem.style.color = "green"
} else {
    mensagem.textContent = `Seu nome não está na lista. Nomes cadastrados: ${listaMaiuscula.toString()}`;
    mensagem.style.color = "orange"
}
}

