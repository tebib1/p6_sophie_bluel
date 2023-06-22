let inputemail = document.querySelector("#username");
let inputpassword = document.querySelector("#pass");
let inputconnexion = document.querySelector(".btnconnection");

inputconnexion.addEventListener("click",function(){
    let username=inputemail.value;
    let pass=inputpassword.value;

    fetch("http://localhost:5678/api/users/login") 
    

.then (response => {
    if (response.ok) {
      return response.json();
    }
    else {
        console.log('Erreur dans l’identifiant ou le mot de passe');
      }
})

    .then(data => {
        localStorage.setItem("token", data.token);
        window.location.href="index.html"
      })
    })
    .catch(error => {
        alert(error.message);
        console.error(error);
      });
    