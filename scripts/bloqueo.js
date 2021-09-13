//avergabriel

var deltaoff= 0.1; //minutos hasta que mutea
var deltaon = deltaoff + 0.5 // minutos hasta que desmutea
var validators = ["caca", "culo", "pedo", "pis"];
var autorizado = parseInt(localStorage.getItem("autorizado"));
var inter;



function mutear() {
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
	
	var minutos =  60 * 1000;
	var ahora = Date.parse(new Date());
	var antes = localStorage.getItem("login") ;
	
	
	if (ahora - deltaoff * minutos >= antes )  mutear();
	if (ahora - deltaon * minutos >= antes ) { desmutear(); marcarTiempo() }
	
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
	
}

function checkPass(){
	var pw = document.getElementById("pass").value;
	console.log(pw);
	if(validarPass(pw)) {
		habilitar();
		mostrarPopup(false);
	}else alert("contraseña incorrecta");
}

function validarPass(pw) {
		var pass = pw || prompt("Ingresar contraseña");
		for (v of validators) {
			if (checkAnagrama(pass,v) ) return true;
		}
		return false;
			
}

function checkAnagrama(inpu, base) {
	
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
	deltaon = prompt("ingrese tiempo hasta muteado en minutos (0.5 = 30 segundos)") +0;
	deltaoff = deltaon + prompt("ingrese tiempo en minutos desde muteado hasta rehabilitacion (0.5 = 30 segundos)" )
}

function mostrarPopup(bool) {
	document.getElementById("desbloquear").style.display = bool? "inline-block" : "none";
}

function arrancarTimer() {
	if (!localStorage.getItem("login")) {
			marcarTiempo()
	};
	inter = setInterval(function() {checkTime()} , 1000);
		
}

function logout() {
	localStorage.setItem("autorizado", 0);
	arrancarTimer();

}

/*********     ACCION      ******/

pedirTiempos();

if (!autorizado) {
	//if (!validarPass()) {
	arrancarTimer();		
	}	
	//else habilitar();
else {
	mostrarPopup(false);
}