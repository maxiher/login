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