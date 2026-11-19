//  MODO OSCURO (Bautista Gomez)
const botonModo = document.getElementById("btn-modo");

if (botonModo) {
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("oscuro");

        if (document.body.classList.contains("oscuro")) {
            botonModo.textContent = "Modo claro";
        } else {
            botonModo.textContent = "Modo oscuro";
        }
    });
}

function alternarTexto(idTexto, idBoton) {
  const texto = document.getElementById(idTexto);
  const boton = document.getElementById(idBoton);
  const expandido = texto.classList.toggle("expandido");
  boton.textContent = expandido ? "Leer menos" : "Leer más";
}
