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
