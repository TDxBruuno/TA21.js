document.addEventListener("DOMContentLoaded", function () {
  const inputTexto = document.getElementById("input-texto");

  inputTexto.addEventListener("focus", function () {
    inputTexto.style.borderColor = "black";
  });

  inputTexto.addEventListener("blur", function () {
    inputTexto.style.borderColor = "";
  });
});
