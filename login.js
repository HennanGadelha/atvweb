   function Entrar() {

       var email = document.getElementById('email').value;
       var senha = document.getElementById('senha').value;
       console.log(senha + email)
       if (email != "" && senha != "") {
           window.location.href = "index.html";
       } else {
           alert("Email/Senha incorreto")
       }

   }

   function Cadastrar() {
       window.location.href = "cadastro.html"
   }