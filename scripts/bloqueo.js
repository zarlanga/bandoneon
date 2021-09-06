//avergabriel

var deltaoff= 0.1; //minutos hasta que mutea
var deltaon = 0.5 // minutos hasta que desmutea
var validators = ["caca", "culo", "pedo", "pis"];



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
	clearInterval(inter);
	desmutear();
}



function validarPass() {
		var pass = prompt("Ingresar contraseña");
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


/*********     ACCION      ******/

if (!localStorage.getItem("login")) {
	marcarTiempo()
};

alert(validarPass());
//nani?
var inter = setInterval(function() {checkTime()} , 1000);