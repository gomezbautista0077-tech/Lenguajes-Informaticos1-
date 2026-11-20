// ================================================
// Wachin City - JavaScript
// Lenguajes Informáticos 1 - UNAHUR 2026
// ================================================

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

// VALIDACIÓN DEL FORMULARIO DE CONTACTO (Villarroel Alfonzo, Tiziano Sebastián)

const formContacto = document.getElementById("formulario");
const msgContacto = document.getElementById("msj-contacto");

if (formContacto) {

  // Desactiva los globos de error del navegador: mostramos los nuestros
  formContacto.noValidate = true;

  // Los campos (los ids son los del HTML)
  const campoNombre = document.getElementById("nombre");
  const campoEmail = document.getElementById("email");
  const campoMensaje = document.getElementById("mensaje");
  const campoAsunto = document.getElementById("asunto");

  // Pone el campo en rojo y muestra el texto del error debajo (clases de Bootstrap)
  const mostrarError = (campo, texto) => {
    campo.classList.add("is-invalid");

    let aviso = campo.parentElement.querySelector(".invalid-feedback");
    if (!aviso) {
      aviso = document.createElement("div");
      aviso.className = "invalid-feedback";
      campo.parentElement.appendChild(aviso);
    }
    aviso.textContent = texto;
  };

  // Saca el rojo y el texto de error de un campo
  const quitarError = (campo) => {
    campo.classList.remove("is-invalid");

    const aviso = campo.parentElement.querySelector(".invalid-feedback");
    if (aviso) {
      aviso.remove();
    }
  };

  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = campoNombre.value.trim();
    const email = campoEmail.value.trim();
    const mensaje = campoMensaje.value.trim();

    let hayErrores = false;

    // Antes de validar, limpiamos los errores de la vez anterior
    quitarError(campoNombre);
    quitarError(campoEmail);
    quitarError(campoMensaje);
    quitarError(campoAsunto);

    // Nombre: no puede estar vacío ni tener números
    if (nombre === "") {
      mostrarError(campoNombre, "Completá tu nombre.");
      hayErrores = true;
    } else if (/[0-9]/.test(nombre)) {
      mostrarError(campoNombre, "El nombre no puede tener números.");
      hayErrores = true;
    }

    // Email: no puede estar vacío y tiene que parecer un email
    if (email === "") {
      mostrarError(campoEmail, "Completá tu email.");
      hayErrores = true;
    } else if (email.length < 5 || !email.includes("@") || !email.includes(".")) {
      mostrarError(campoEmail, "Ingresá un email válido (ej: nombre@correo.com).");
      hayErrores = true;
    }

    // Mensaje: no puede estar vacío
    if (mensaje === "") {
      mostrarError(campoMensaje, "Escribí tu mensaje.");
      hayErrores = true;
    }

    // Asunto: la opción 0 es "Elegí uno...", esa no vale
    if (campoAsunto.selectedIndex === 0) {
      mostrarError(campoAsunto, "Elegí un asunto.");
      hayErrores = true;
    }

    // Si algo falló, avisamos y no enviamos
    if (hayErrores) {
      msgContacto.textContent = "Por favor, completá los campos marcados en rojo.";
      msgContacto.className = "mt-3 fw-semibold text-center msg-error";
      return;
    }

    // Todo bien: mensaje de éxito y se limpia el formulario
    msgContacto.textContent = `¡Gracias, ${nombre}! Mensaje enviado con éxito.`;
    msgContacto.className = "mt-3 fw-semibold text-center msg-exito";
    formContacto.reset();
  });

  // Mientras escribe, el error de ese campo se va solo
  campoNombre.addEventListener("input", () => {
    quitarError(campoNombre);

    // Si escribe un número en el nombre, se avisa enseguida
    if (/[0-9]/.test(campoNombre.value)) {
      mostrarError(campoNombre, "El nombre no puede tener números.");
    }
  });

  campoEmail.addEventListener("input", () => {
    quitarError(campoEmail);
  });

  campoMensaje.addEventListener("input", () => {
    quitarError(campoMensaje);
  });

  campoAsunto.addEventListener("change", () => {
    quitarError(campoAsunto);
  });
}

function crearSaberMas(selector = ".saber-mas", lineas = 3) {
  document.querySelectorAll(selector).forEach(texto => {
    // Limita el texto a N líneas
    texto.style.display = "-webkit-box";
    texto.style.webkitBoxOrient = "vertical";
    texto.style.webkitLineClamp = lineas;
    texto.style.overflow = "hidden";

    // Si el texto ya cabe completo, no hace falta botón
    if (texto.scrollHeight <= texto.clientHeight) return;

    const boton = document.createElement("button");
    boton.textContent = "Saber más";

    boton.addEventListener("click", () => {
      const abierto = texto.style.webkitLineClamp === "unset";
      texto.style.webkitLineClamp = abierto ? lineas : "unset";
      boton.textContent = abierto ? "Saber más" : "Saber menos";
    });

    texto.after(boton);
  });
}

document.addEventListener("DOMContentLoaded", () => crearSaberMas());function crearSaberMas(selector = ".saber-mas", lineas = 3) {
  document.querySelectorAll(selector).forEach(texto => {
    // Limita el texto a N líneas
    texto.style.display = "-webkit-box";
    texto.style.webkitBoxOrient = "vertical";
    texto.style.webkitLineClamp = lineas;
    texto.style.overflow = "hidden";

    // Si el texto ya cabe completo, no hace falta botón
    if (texto.scrollHeight <= texto.clientHeight) return;

    const boton = document.createElement("button");
    boton.textContent = "Saber más";

    boton.addEventListener("click", () => {
      const abierto = texto.style.webkitLineClamp === "unset";
      texto.style.webkitLineClamp = abierto ? lineas : "unset";
      boton.textContent = abierto ? "Saber más" : "Saber menos";
    });

    texto.after(boton);
  });
}

document.addEventListener("DOMContentLoaded", () => crearSaberMas());