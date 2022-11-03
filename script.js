var contenido = document.querySelector("#api");
fetch("https://api.github.com/users/antonio1519")
  .then(function (response) {
    return response.json();
  })

  function validateForm() {
    var x =
      document.forms["formulario"][("form-name", "form-email", "form-asunto")].value;
    if (x == "") {
      alert("insera dados!");
      console.log(x);
      return false;
    }
  };
