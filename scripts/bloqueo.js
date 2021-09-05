//avergabriel

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

var seg = 0;


function checkTime() {
	var minutos = 0.1;
	var delta = minutos * 60 * 1000;
	var ahora = Date.parse(new Date());
	var antes = localStorage.getItem("login") ;
	if (ahora  -delta >= antes )  mutear();
	if (ahora -  delta *2 >=antes ) {desmutear(); marcarTiempo()}
	
	
	console.log(seg++);
	console.log(ahora - antes);
	console.log("delta" + delta);
	console.log("antes" + antes);
	console.log("ahora" + ahora);
	/*
	*/
	
}

if (!localStorage.getItem("login")) {
	
	};

function marcarTiempo() {

	var fesha = new Date();
	localStorage.setItem("login", Date.parse(fesha));
//	document.write(localStorage.getItem("login"))

}

marcarTiempo()

/* else if (localStorage.getItem("login") +  {
	
}*/

var int = setInterval(function() {checkTime()} , 1000);