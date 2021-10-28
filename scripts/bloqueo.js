//avergabriel

var deltaoff= 2; //minutos hasta que mutea
var deltaon = deltaoff + 118 // minutos hasta que desmutea
var validators = ["mujeres", "descalzas"];
var autorizado = parseInt(localStorage.getItem("autorizado"));
var inter;
var checks= 0;


function mutear() {
	console.log("muteo" + checks)<
	mostrarPopup(true);
	//if (checks < 20) mostrarPopup(true);
	//else setTimeout(function(){mostrarPopup(true)}, 1000*60*2);
	volu= 0;
	document.getElementById("vol").value = 0;
	document.getElementById("vol").disabled = true;
	
}

function desmutear() {
	volu= 0.6;
	document.getElementById("vol").disabled = false;
	document.getElementById("vol").value = 60;
}


function checkTime() {
	checks++;
	//console.log("chekio")
	var minutos =  60 * 1000;
	var ahora = Date.parse(new Date());
	var antes = localStorage.getItem("login") ;
	
	
	if (ahora - deltaoff * minutos >= antes && volu !=0 && checks > 15 ) {
		//console.log("entro");
		mutear();
	}
	if (ahora - deltaon  * minutos >= antes ) {
		//console.log("marco");
		desmutear();
		marcarTiempo()
	}
	
	/*
	console.log(seg++);
	
	console.log(ahora - antes);
	
	console.log("antes" + antes);
	console.log("ahora" + ahora);
	*/
	
	
}


function marcarTiempo() {
	var fesha = new Date();
	localStorage.setItem("login", Date.parse(fesha));
}

function habilitar() {
	localStorage.setItem("autorizado", 1);
	autorizado = true;
	clearInterval(inter);
	desmutear();
	showLogin(false);
	
}

function checkPass(){
	var pw = document.getElementById("pass").value;
	if(validarPass(pw)) {
		habilitar();
		mostrarPopup(false);
	}else alert("contraseña incorrecta");
}

function validarPass(pw) {
		var pass = pw //|| prompt("Ingresar contraseña");
		for (v of validators) {
			if (checkAnagrama(pass,v) ) return true;
		}
		return false;
			
}

function checkAnagrama(inpu, base) {
	//console.log("i" + inpu.length);
	//console.log("b" + base.length);
	//for(i of inpu) console.log("ata|" + i);
	if (inpu.length == base.length) {
		inpu = inpu.split("");
		base = base.split("");
		for (i of inpu) {
			//console.log(i);
			var ind = base.indexOf(i)
			if (ind != -1) {
				delete base[ind]
			} else {
				return false
			}
			
		}
		return true;
		//console.log("mismo tamaño");
		
	}
		
	else return false;
}

function pedirTiempos(){
	deltaoff =  parseFloat(prompt("ingrese tiempo hasta muteado en minutos (0.5 = 30 segundos)"));
	deltaon = deltaoff + parseFloat(prompt("ingrese tiempo en minutos desde muteado hasta rehabilitacion (0.5 = 30 segundos)") )
	
}

function mostrarPopup(bool) {
	document.getElementById("desbloquear").style.display = bool? "inline-block" : "none";
	//console.log("popup" + bool);
}

function arrancarTimer() {
	if (!localStorage.getItem("login")) {
			marcarTiempo()
	};
	inter = setInterval(function() {checkTime()} , 1000);
		
}

function log() {
	if(autorizado) {
		localStorage.setItem("autorizado", 0);
		autorizado = false;
		arrancarTimer();
		showLogin(true);
	} else {
		mostrarPopup(true);
	}

}

function showLogin(bool) {
	if (bool) {
		document.getElementById("log").style.backgroundColor="green";
		document.getElementById("log").innerText="log in";
	} else {
		document.getElementById("log").style.backgroundColor="red";
		document.getElementById("log").innerText="log out";
	}
}


/**************email**********/
const btn = document.getElementById('botonMail');

document.getElementById('formMail')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   	const serviceID = 'service_pjnvxbo';  
   //const serviceID = 'default_service';
   const templateID = 'template_2sggfli';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Hemos recibido tu pedido y te escribiremos a la brevedad');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
/*********     ACCION      ******/

//pedirTiempos();

if (!autorizado) {
	//if (!validarPass()) {
	showLogin(true);
	arrancarTimer();		
	}	
	//else habilitar();
else {
	showLogin(false);
	mostrarPopup(false);
}

desmutear();