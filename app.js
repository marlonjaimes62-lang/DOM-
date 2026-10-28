import { validar } from "./validador.js";
const formulario = document.querySelector("#producto");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let validador = validar(formulario);
    
    console.log(validador);
})