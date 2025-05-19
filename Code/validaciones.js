document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector("form");
  const mensaje = document.getElementById("mensaje");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;

    // Validar correo que termine en .com
    const correoRegex = /^[^\s@]+@[^\s@]+\.(com)$/i;
    if (!correoRegex.test(correo)) {
      mostrarError("El correo debe tener un formato válido");
      return;
    }

    // Validar teléfono (9 a 15 dígitos numéricos)
    const telefonoRegex = /^[0-9]{10}$/;
    if (!telefonoRegex.test(telefono)) {
      mostrarError("Introduce un número de teléfono válido (10 dígitos).");
      return;
    }

    // Validar fecha de nacimiento (no puede ser futura)
    const hoy = new Date();
    const fechaIngresada = new Date(fechaNacimiento);
    if (!fechaNacimiento || fechaIngresada >= hoy) {
      mostrarError("La fecha de nacimiento debe ser válida.");
      return;
    }

    // Todo válido
    mostrarExito("Usuario registrado correctamente.");
    formulario.reset();
  });

  function mostrarError(texto) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje error";
  mensaje.style.display = "block";
 // Ocultar mensaje después de 4 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 4000);
}

function mostrarExito(texto) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje exito";
  mensaje.style.display = "block";
 // Ocultar mensaje después de 4 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 4000);
}

});
