let LogingForm = document.getElementById ("Loging-Form");
let RegForm = document.getElementById ("Reg-Form");
let indicator = document.getElementById ("indicator");
let indicatorHR = document.getElementById("indicator");
indicatorHR.style.color = "black";

function register(){
RegForm.style.transform =  "translatex(0px)"
LogingForm.style.transform =  "translatex(0px)"
indicator.style.transform =  "translatex(100px)"

}


function loging(){
RegForm.style.transform =  "translatex(300px)"
LogingForm.style.transform =  "translatex(300px)"
indicator.style.transform =  "translatex(0px)"
}

const emailOrPhone = document.getElementById ("emailOrPhone");
const Contraseña = document.getElementById ("Contraseña");


fetch('/api/datos')
  .then(response => response.json())
  .then(data => {
    // Hacer algo con los datos recibidos del servidor
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener datos:', error);
  });