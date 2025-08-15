function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('regBtn').addEventListener('click', function (e) {
    const check = document.getElementById('terminos');
    if (!check.checked) {
      e.preventDefault();
      document.getElementById('alert-danger').classList.add('show');
      return;
    }
    document.getElementById('alert-success').classList.add('show');
    
  });
});


document.getElementById("regBtn").addEventListener("click", () => {
    document.getElementById("alert-success").classList.remove("show");
    document.getElementById("alert-danger").classList.remove("show");

    const pass1 = document.getElementById("password1").value;
    const pass2 = document.getElementById("password2").value;

    // La contraseña debe tener al menos 6 caracteres
    const largoContrasenia = pass1.length >= 6;
    // Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
    const contraseniasIgual = pass1 === pass2;

    // Ver si se cumplen las dos condiciones
    if (largoContrasenia && contraseniasIgual) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});

document.getElementById("regBtn").addEventListener("click", function () {

  let nombre = document.getElementById("nombre").value.trim();
  let apellido = document.getElementById("apellido").value.trim();
  let email = document.getElementById("email").value.trim();
  let password1 = document.getElementById("password1").value.trim();
  let password2 = document.getElementById("password2").value.trim();
  let terminos = document.getElementById("terminos").checked; 

  if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
      showAlertError("Por favor completa todos los campos.");
      return;
  } else {
      showAlertSuccess();
    }
  })