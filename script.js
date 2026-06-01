// Mensagem inicial
window.onload = function () {
    alert("Bem-vindo ao meu projeto escolar!");
};

// Sistema de curtidas
let likes = 0;

const likeBtn = document.getElementById("likeBtn");
const likesText = document.getElementById("likes");

likeBtn.addEventListener("click", () => {
    likes++;
    likesText.textContent = likes;

    likeBtn.style.transform = "scale(1.2)";

    setTimeout(() => {
        likeBtn.style.transform = "scale(1)";
    }, 200);
});

// Comentários
const comentarioInput = document.getElementById("comentarioInput");
const enviarComentario = document.getElementById("enviarComentario");
const listaComentarios = document.getElementById("listaComentarios");

enviarComentario.addEventListener("click", () => {
    const texto = comentarioInput.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        listaComentarios.appendChild(li);

        comentarioInput.value = "";
    }
});

// Alternar tema
const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});