function mutear(){console.log("muteo"+checks),mostrarPopup(!0),volu=0,document.getElementById("vol").value=0,document.getElementById("vol").disabled=!0}function desmutear(){volu=.6,document.getElementById("vol").disabled=!1,document.getElementById("vol").value=60}function checkTime(){checks++;var e=Date.parse(new Date),t=localStorage.getItem("login");e-6e4*deltaoff>=t&&0!=volu&&checks>15&&mutear(),e-6e4*deltaon>=t&&(desmutear(),marcarTiempo())}function marcarTiempo(){var e=new Date;localStorage.setItem("login",Date.parse(e))}function habilitar(){localStorage.setItem("autorizado",1),autorizado=!0,clearInterval(inter),desmutear(),showLogin(!1)}function checkPass(){validarPass(document.getElementById("pass").value)?(habilitar(),mostrarPopup(!1)):alert("contraseña incorrecta")}function validarPass(e){var t=e;for(v of validators)if(checkAnagrama(t,v))return!0;return!1}function checkAnagrama(e,t){if(e.length==t.length){for(i of(e=e.split(""),t=t.split(""),e)){var o=t.indexOf(i);if(-1==o)return!1;delete t[o]}return!0}return!1}function pedirTiempos(){deltaoff=parseFloat(prompt("ingrese tiempo hasta muteado en minutos (0.5 = 30 segundos)")),deltaon=deltaoff+parseFloat(prompt("ingrese tiempo en minutos desde muteado hasta rehabilitacion (0.5 = 30 segundos)"))}function mostrarPopup(e){document.getElementById("desbloquear").style.display=e?"inline-block":"none",document.querySelectorAll(".overlay").forEach(t=>t.style.display=e?"none":"inline-block")}function arrancarTimer(){localStorage.getItem("login")||marcarTiempo(),inter=setInterval(function(){checkTime()},1e3)}function log(){autorizado?(localStorage.setItem("autorizado",0),autorizado=!1,checks=0,arrancarTimer(),showLogin(!0)):mostrarPopup(!0)}function showLogin(e){e?(document.getElementById("log").style.backgroundColor="green",document.getElementById("log").innerText="log in"):(document.getElementById("log").style.backgroundColor="red",document.getElementById("log").innerText="log out")}var inter,deltaoff=2,deltaon=deltaoff+118,validators=["mujeres","descalzas"],autorizado=parseInt(localStorage.getItem("autorizado")),checks=0;const btn=document.getElementById("botonMail");document.getElementById("formMail").addEventListener("submit",function(e){e.preventDefault(),btn.value="Enviando...";emailjs.sendForm("service_pjnvxbo","template_2sggfli",this).then(()=>{btn.value="Enviar",alert("Hemos recibido tu pedido y te escribiremos a la brevedad")},e=>{btn.value="Enviar",alert(JSON.stringify(e))})}),autorizado?(showLogin(!1),mostrarPopup(!1)):(showLogin(!0),arrancarTimer()),desmutear(),screen.width<800&&(document.getElementById("desbloquear").style.maxWidth="90vw",document.getElementById("desbloquear").style.left="5vw",document.getElementById("errormidi").style.maxWidth="45vw",document.getElementById("errormidi").style.right="10vw");