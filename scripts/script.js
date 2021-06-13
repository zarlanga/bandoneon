	/**************terminan las keys carga los overlays***/

   
  /**** pacalibrar los overlays de los botones */
  function elegirBotono() {
  
	 plantarOverlays();
	 
	 var n = $("#botonoind").val();
	 
	 var cssTop = document.getElementById("bono"+n).style.top;
	 var cssLeft = document.getElementById("bono"+n).style.left;
	 cssTop = cssTop.substr(0,cssTop.length -2);
	 cssLeft = cssLeft.substr(0,cssLeft.length -2,);
	 $("#botonox").val(cssTop  );
	 $("#botonoy").val(cssLeft  );
	 
	 $("#bono"+n).css({"opacity":"1","background-color":"green"});
	 
  }
  
   function moverboton(bool){
     var n = $("#botonoind").val();
	 var x=  $("#botonox").val() ;
	 var y= $("#botonoy").val() 
     $("#bono"+n).css("top",x+"vw");
	 $("#bono"+n).css("left",y+"vw");
   }
   
   function printValues(){
   var testo = "["
	for(var i= 0; i<39;i++){
		if( document.getElementById("bono"+i)) {
			var x = document.getElementById("bono"+i).style.top; // $("#bono" + i ).css("top");
			var y =   document.getElementById("bono"+i).style.left; //$("#bono" + i ).css("left");
			testo += "[\"" + x + "\",\"" +y+"\"],";
		} else {
		testo += "[\"" + "0vw" + "\",\"" +"0vw"+"\"],";
		}
	}
	testo += "]";
	console.table(testo);
	//$("#oupu").append(testo);
  }
  
  function plantarOverlays(){
	//for(var i= 0; i<39;i++) $("#bono" + i ).css({"opacity":"0.5","top":"0","left":"0"});
	for(var i= 0; i<39;i++) $("#bono" + i ).css({"opacity":"0.5","background-color":"yellow"});
  }
 

	/***********************las keys **************************/
    
	$(document).ready(function(){
      
	  $("body").keydown(function(e){
        var keyCode = e.keyCode || e.which;
		//if( keyCode <= 112 && keyCode >= 123 || keyCode == 32)  
		e.preventDefault();
        
        //console.log(keyCode);
		//if(podemoTocarLaNota(keyCode)){
		if (keyCode != 32) {
			tirarnota(entrakeysalenota(keyCode,true)); }
		  else {
			//cambiaModo()
			setMode( modo % 2 == 0 ?  modo + 1 : modo - 1)
			
		}
		
		//}
      });
      
      
	  $("body").keyup(function(e){
        var keyCode = e.keyCode || e.which;
		if (keyCode != 32) largarnota(entrakeysalenota(keyCode));
      });
      
    });
	
	
	/*********************************crea y carga los overlays**********************************/

   $(document).ready(function(){
		
		
		
		var moneda=true;
		for(var i= 0; i<40;i++){
			// var c= moneda ? i*10 : 250 - i*10
			var c= moneda ? 30 : 150 ;
			var color =`rgb(${c},${c},${c}) `
			//var color =`rgb(200,${c},${c}) `
			var testo= `<div class="overlay"style="background:${color};opacity:0.02;" id="overnota${i}"></div>`
			//var testo2= `<div class="botonota" style="background:white;opacity:0.0;top:${posbot[i][0]};left:${posbot[i][1]}" id="bono${i}"></div>`
			var testo2= `<div class="botonota" style="opacity:0.0;" id="bono${i}"></div>`;
			$("#tiagarro0").append(testo2);
			if (i < 24) { 
				$("#tiagarro1").append(testo)
			}else{
				$("#tiagarro2").append(testo)
			}
			//$("#tiagarro" + i<24 ? "1" : "2").append(testo)
			moneda= !moneda;
			
		}
		
		var m = getQueryVariable("mano") != "izq";
		var a = getQueryVariable("cerr") != "true";
		
		var mod = m && a ? 0 : 
		           m && !a ? 1 :
				    !m && a ? 2 : 3;
					
		
		setMode(mod);
		console.log("largo" + posbot.length) 
		
		
	});
  
	/**************************************************************************************/
	
	/*************************VARIABLES (PONELE)************************/
	
	var estaAbriendo = false;
	
	var notasAntitremolo=[];
	var notas =[];
	
	var notasD_A = [65, 90,87,51,114,52,88,69,83,84,53,70,89,68,71,85,82,72,86,73,67,66,188,74,78,
                54,75,55,77,56,118,117,null,116,null,null,115];
	var notasD_C = [65,90,87,114,52,51,88,68,83,69,84,53,70,54,89,55,71,85,188,72,67,82,73,66,74,116,78,117,75,56,118,77,null,null,115,null,null,86];
	var notasI_A =  [188,null,90,77,51,57,75,73,115,52,116,88,85,117,69,54,83,118,78,53,68,82,56,70,84,74,71,66,89,55,72,67,119,86];
	var notasI_C = [null,77,51,null,90,188,57,69,115,83,116,75,56,55,52,117,68,78,73,82,74,70,53,84,54,71,89,118,72,85,67,119,86,null,null,66,88];
	var notasFull = [notasD_A, notasD_C, notasI_A, notasI_C]
	
	var posbot= [];
	
	
	var posbotD_A = [["16.8vw","9.9vw"],["20.3vw","11.2vw"],["12.4vw","13vw"],["8.8vw","14.7vw"],["5.9vw","17.5vw"],["8.1vw","20.5vw"],["19.3vw","16.6vw"],["11.4vw","18.3vw"],["15.4vw","14.9vw"],["10.8vw","28.5vw"],["8vw","26.1vw"],["14.2vw","25.1vw"],["11.4vw","33.4vw"],["14.6vw","19.9vw"],["14.6vw","30.4vw"],["12.5vw","39vw"],["10.7vw","23.3vw"],["14.8vw","35.2vw"],["18vw","26.8vw"],["13.8vw","44.2vw"],["18.3vw","21.7vw"],["17.9vw","31.9vw"],["21vw","47.6vw"],["16.1vw","40.7vw"],["18.4vw","36.8vw"],["8vw","31.5vw"],["17.3vw","45.8vw"],["8.9vw","37.2vw"],["19.6vw","42.5vw"],["10.1vw","42.5vw"],["6.9vw","40.8vw"],["5.8vw","34.9vw"],["3.9vw","38.1vw"],["5.2vw","28.9vw"],["3.4vw","32.4vw"],["3.1vw","26.4vw"],["5.3vw","23.2vw"],["0vw","0vw"],["3.3vw","19.6vw"]] ;
	//[["20.3vw","4.29vw"],["24.6vw","6.29vw"],["14.1vw","8.5vw"],["9.7vw","10.79vw"],["6.1vw","13.34vw"],["9.5vw","17.53vw"],["23.3vw","12.29vw"],["12.9vw","14.69vw"],["18.4vw","10.5vw"],["12.2vw","27.39vw"],["9.3vw","23.98vw"],["17vw","23.3vw"],["13vw","33.48vw"],["17.4vw","16.88vw"],["17vw","28.73vw"],["14.4vw","39.59vw"],["12.6vw","20.89vw"],["17.7vw","35.29vw"],["21.8vw","25.09vw"],["16.4vw","45.79vw"],["22vw","18.66vw"],["21.6vw","31.39vw"],["25.7vw","50.29vw"],["19.2vw","41.79vw"],["22.7vw","37.59vw"],["9vw","30.88vw"],["20.8vw","48.1vw"],["9.9vw","37.21vw"],["23.7vw","43.99vw"],["12.1vw","43.79vw"],["7.7vw","41.06vw"],["5.9vw","34.05vw"],["3.7vw","38.57vw"],["5.6vw","27.48vw"],["2.2vw","31.78vw"],["2.7vw","24.09vw"],["5.4vw","20.47vw"],["0vw","0vw"],["2.8vw","17.19vw"],["0vw","0vw"]];
	var posbotD_C = [["16.8vw","9.9vw"],["20.2vw","11.3vw"],["12.4vw","13.1vw"],["5.8vw","17.5vw"],["8.2vw","20.5vw"],["8.8vw","14.7vw"],["19.1vw","16.7vw"],["14.7vw","19.9vw"],["15.4vw","14.8vw"],["11.4vw","18.2vw"],["10.7vw","28.5vw"],["8vw","26.1vw"],["14.4vw","25.2vw"],["8vw","31.5vw"],["11.4vw","33.4vw"],["8.8vw","37.3vw"],["14.5vw","30.4vw"],["12.5vw","39vw"],["20.8vw","47.6vw"],["14.8vw","35.1vw"],["18.2vw","21.8vw"],["10.8vw","23.4vw"],["13.9vw","44.2vw"],["18vw","31.9vw"],["16.1vw","40.7vw"],["5.2vw","28.9vw"],["18.5vw","36.8vw"],["5.8vw","35vw"],["17.3vw","45.8vw"],["10.2vw","42.6vw"],["7.1vw","40.9vw"],["19.5vw","42.6vw"],["3.9vw","38.2vw"],["3.3vw","32.4vw"],["5.4vw","23.2vw"],["3vw","26.4vw"],["3.3vw","19.9vw"],["0vw","0vw"],["0vw","0vw"],["17.7vw","26.8vw"]];
	//[["18.99vw","4.29vw"],["23.29vw","6.29vw"],["12.99vw","8.39vw"],["5.09vw","13.19vw"],["8.49vw","17.19vw"],["8.69vw","10.69vw"],["21.89vw","12.1vw"],["16.29vw","16.6vw"],["17.29vw","10.19vw"],["11.79vw","14.39vw"],["10.99vw","26.79vw"],["8.19vw","23.39vw"],["15.79vw","22.79vw"],["7.99vw","30.2vw"],["11.89vw","32.79vw"],["8.79vw","36.6vw"],["15.89vw","28.29vw"],["13.29vw","38.89vw"],["24.29vw","49.3vw"],["16.49vw","34.6vw"],["20.69vw","18.49vw"],["11.39vw","20.39vw"],["15.19vw","44.8vw"],["20.29vw","30.79vw"],["17.99vw","40.89vw"],["4.59vw","27.1vw"],["21.39vw","36.8vw"],["4.89vw","33.49vw"],["19.48vw","47.1vw"],["10.89vw","42.89vw"],["6.59vw","40.3vw"],["22.39vw","42.99vw"],["2.79vw","37.8vw"],["1.39vw","31.2vw"],["4.48vw","20.1vw"],["1.69vw","23.39vw"],["1.79vw","16.8vw"],["0vw","0vw"],["0vw","0vw"],["20.49vw","24.59vw"]];
	var posbotI_A = [["18.6vw","47.2vw"],["0vw","0vw"],["19vw","7.5vw"],["16.9vw","41.3vw"],["8.1vw","10.2vw"],["9.7vw","47.3vw"],["14.9vw","45.2vw"],["11.3vw","43.2vw"],["4.2vw","18.9vw"],["6.8vw","16.1vw"],["3.6vw","25.6vw"],["18vw","11.9vw"],["9.2vw","37.3vw"],["3.7vw","32.2vw"],["10vw","13.3vw"],["5.7vw","28.8vw"],["14.7vw","9.7vw"],["4.6vw","38.7vw"],["15.8vw","35.2vw"],["5.8vw","22.6vw"],["13.2vw","15.7vw"],["8.7vw","19.3vw"],["7.5vw","41.3vw"],["12.4vw","21.7vw"],["8.4vw","25.6vw"],["13.2vw","39.1vw"],["12vw","27.7vw"],["15.6vw","29.4vw"],["8.7vw","31.3vw"],["6.2vw","34.9vw"],["12.3vw","33vw"],["16.4vw","17.6vw"],["6.2vw","45.4vw"],["15.6vw","23.8vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"]] ;
	//[["24.94vw","54.3vw"],["0vw","0vw"],["26.49vw","1.49vw"],["22.99vw","46.39vw"],["10.29vw","5.09vw"],["12.39vw","54.3vw"],["19.95vw","51.99vw"],["14.6vw","48.9vw"],["4.59vw","16.99vw"],["8.49vw","12.99vw"],["4.09vw","25.99vw"],["24.6vw","7.39vw"],["12.29vw","41.3vw"],["4.39vw","34.29vw"],["12.89vw","9.39vw"],["7.49vw","29.93vw"],["20.1vw","4.98vw"],["5.89vw","43.49vw"],["21.49vw","38.6vw"],["6.89vw","21.69vw"],["17.39vw","12.39vw"],["11.19vw","17.99vw"],["9.89vw","46.7vw"],["16.1vw","20.6vw"],["10.69vw","25.6vw"],["17.69vw","43.99vw"],["15.69vw","28.6vw"],["20.99vw","30.99vw"],["10.89vw","33.79vw"],["7.39vw","37.99vw"],["16.49vw","35.99vw"],["22.39vw","15.29vw"],["7.69vw","51.7vw"],["20.89vw","22.99vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"]];
	var posbotI_C =[["0vw","0vw"],["16.9vw","41.3vw"],["8.1vw","10.2vw"],["0vw","0vw"],["19vw","7.5vw"],["18.7vw","47.3vw"],["9.7vw","47.2vw"],["9.9vw","13.3vw"],["4.2vw","18.8vw"],["14.7vw","9.8vw"],["3.6vw","25.6vw"],["14.9vw","45.2vw"],["7.5vw","41.3vw"],["6.2vw","34.8vw"],["6.8vw","16.1vw"],["3.7vw","32.3vw"],["13.1vw","15.7vw"],["15.8vw","35.2vw"],["11.2vw","43.2vw"],["8.8vw","19.3vw"],["13.2vw","39.1vw"],["12.3vw","21.7vw"],["5.9vw","22.6vw"],["8.49vw","25.99vw"],["5.7vw","28.8vw"],["12.1vw","27.7vw"],["8.7vw","31.4vw"],["4.6vw","38.7vw"],["12.4vw","33.1vw"],["9.2vw","37.2vw"],["16.4vw","17.6vw"],["6.2vw","45.4vw"],["15.6vw","23.7vw"],["0vw","0vw"],["0vw","0vw"],["15.5vw","29.5vw"],["17.9vw","12vw"],["0vw","0vw"],["0vw","0vw"]];
	//[["0vw","0vw"],["20.69vw","46.59vw"],["8.19vw","5.79vw"],["0vw","0vw"],["24.19vw","2.19vw"],["22.69vw","54.29vw"],["10.29vw","54.49vw"],["10.69vw","10.09vw"],["2.43vw","17.39vw"],["17.79vw","5.59vw"],["2.09vw","26.39vw"],["17.79vw","52.09vw"],["7.79vw","46.79vw"],["5.29vw","38.29vw"],["6.39vw","13.49vw"],["2.29vw","34.59vw"],["15.19vw","12.79vw"],["19.19vw","38.89vw"],["12.45vw","48.99vw"],["8.99vw","18.49vw"],["15.39vw","44.09vw"],["13.89vw","20.99vw"],["4.69vw","22.09vw"],["8.49vw","25.99vw"],["5.39vw","30.39vw"],["13.39vw","28.89vw"],["8.79vw","34.09vw"],["3.89vw","43.69vw"],["14.19vw","36.29vw"],["10.09vw","41.59vw"],["19.94vw","15.79vw"],["5.59vw","51.79vw"],["18.59vw","23.39vw"],["0vw","0vw"],["0vw","0vw"],["18.79vw","31.39vw"],["22.29vw","7.89vw"]];
    var posbotFull = [posbotD_A, posbotD_C, posbotI_A, posbotI_C ]
	
	var modo;
	
	var corridas =	getQueryVariable("mano") == 'izq' ? 18 : 39; //dudoooooso
	
	var sourcesCabeza=[];  
	for (var i = 0; i<100;i++) sourcesCabeza[i] = null;  
    
	var pepe; // intervalo para testeo de notas
	
	var volu = 0.6;
	
	var samplesCargados= 0;
  
	const list = document.getElementById('midi-list');
	const debugEl = document.getElementById('debug');
  
	/*****************FUNCIONES*******************************************/
	
	function bajarpdf() {
	var url = "img/mapas/";
		switch (modo) {
			case 0 :
				url += "der_abriendo.pdf"
			break;
			
			case 1 :
				url += "der_cerrando.pdf"
			break;
			
			case 2 :
				url += "izq_abriendo.pdf"
			break;
			
			case 3 :
				url += "izq_cerrando.pdf"
			break;
		}
		console.log(url);
	window.open(url, '_blank');
	}
	
	function cambiarMano() {
	 var url = "./bandolica.html?";
	 if (getQueryVariable("gh") ) url += "&gh=t";
	 if (getQueryVariable("band") ) url += "&band=" + getQueryVariable("band");
	 if ( !getQueryVariable("mano") || getQueryVariable("mano") == "der")  url += "&mano=izq";
	
	window.open(url,"_self");
	//window.open("./bandolica.html?band=aa","_self");
	}
	
	function setManito(n) {
		if (n < 2) {
			$("#manito").html("Ir a mano izquierda <br><i class='fa fa-hand-paper-o ' style='font-size:40px; '></i>");
			$("#manito").css({"display":"block","right":"","left":"0px","border-radius":"0px 15px 15px 0px "})
			
			$("#manito").addClass("abreIzquierda");
			
			
			
		} else {
			$("#manito").html("Ir a mano derecha<br><i class='fa fa-hand-paper-o espejado' style='font-size:40px; '></i>");
			$("#manito").css({"display":"block","right":"0px","left":"","border-radius":"15px 0px 0px 15px"})
			$("#manito").addClass("abreDerecha");
		
			
		
		}
		
	}
	

    /***********CAMBIO DE MODOO******/
	
	function setMode(n) {
	//cambiar variable notas, cambiar variable posbot, cambiar las tres imagenes, algo mas? uhcomomierdahagoconlosamples... (mirar como se hacia el load)
		var abr = n % 2 == 0 ? "abriendo" : "cerrando";
		var man = n < 2  ? "derecha" : "izquierda";
		var modificador = ["D_A", "D_C", "I_A", "I_C"];
		var imgsrc = [`img_lab/teclas_${modificador[n]}.jpg`,  //pisar este
					`img/pentagramas/penta_${modificador[n]}_1.jpg`, 
					`img/pentagramas/penta_${modificador[n]}_2.jpg` ]
		
		notas = notasFull[n];
		posbot= posbotFull[n];
		setManito(n);
		
		modo = n;
		
		
		
		
		//----- ESTOSEVADESCONTORLAAAR
		var bando = getQueryVariable("band") || "aa";
		//if ( man == "derecha") 
		imgsrc[0] = `img/teclados/${bando}_${man}.${bando != "emu" ? "png": "jp2"} `;
		
		
		// else  imgsrc[0] = "img_lab/manoIzqBB.png";
		// imgsrc[0] = bando == "aa" ?"img_lab/rectangularbordess.png" : 
		
		
		//-----
		
		$("#img0").attr("src", imgsrc[0]);
		$("#imgP1").attr("src", imgsrc[1]);
		$("#imgP2").attr("src", imgsrc[2]);
		
		
		//$("#titulo").html( n % 2 == 0 ? "Abriendo" : "Cerrando");
		$("#titulo").html( abr);
		
		reordenarOverlays();
	}

	function cambiaModo(){
	
		// funcion vieja, la dejamos nomas de recuerdo (?)
		
		
		console.log("cambioModo");
		estaAbriendo = !estaAbriendo;
		if (estaAbriendo){
			$("#titulo").html("abriendo");
			notas =  [188,null,90,77,51,57,75,73,115,52,116,88,85,117,69,54,83,118,78,53,68,82,56,70,84,74,71,66,89,55,72,67,119,86];
			//[188,null,90,77,51,57,75,73,115,52,116,88,85,117,69,54,83,118,78,53,68,82,56,70,*17*,84,74,71,66,89,55,72,119,86];
			//console.log("metionotas");
			//[65, 90,87,51,114,52,88,69,83,84,53,70,89,68,71,85,82,72,86,73,67,66,188,74,78,
                //54,75,55,77,56,118,117,null,116,null,null,115]; //insertar aca las notas
			$("#img0").css("display","");
			$("#img1").css("display","none");
      
			for( var i = 0; i<37; i++){
				$("#bono"+i).css("top", posbot[i][0]);
				$("#bono"+i).css("left", posbot[i][1]);
				if (posbot[i][0] == "0vw") $("#bono"+i).css("display","none");
				else $("#bono"+i).css("display","");
				//asignarTecla(i);
			}
			//reordenarOverlays(1); //ver que onda el array de posiciones
		} else{
			$("#titulo").html("cerrando");
			$("#img0").css("display","none");
			$("#img1").css("display","");
			notas = [null,77,51,null,90,188,57,69,115,83,116,75,56,55,52,117,68,78,73,82,74,70,53,84,54,71,89,118,72,85,67,119,86,null,null,66,88];//insertar aca las notas cerrando
			//notas = [65,90,87,114,52,51,88,68,83,69,84,53,70,54,89,55,71,85,188,72,67,73,66,74,116,78,117,75,56,118,77,null,null,115] //insertar aca las notas cerrando
			for( var i = 0; i<37; i++){
				
				$("#bono"+i).css("top", posbot1[i][0]);
				$("#bono"+i).css("left", posbot1[i][1]);
				
				if (posbot1[i][0] == "0vw") $("#bono"+i).css("display","none");
				else $("#bono"+i).css("display","");
				
				//asignarTecla(i);
			}
			//reordenarOverlays(2); //
		}
		silenciarTodo();
		
	
	}
	
	function reordenarOverlays() {
		for( var i = 0; i<posbot.length; i++){
			$("#bono"+i).css("top", posbot[i][0]);
			$("#bono"+i).css("left", posbot[i][1]);
			if (posbot[i][0] == "0vw") $("#bono"+i).css("display","none");
			else $("#bono"+i).css("display","");
		}
	}
	
	function setColor(t){
		var col = getColor3();
		$(t).css("background-color", col[0])
		$(t).css("color", col[1])
	}

	function getColor3(){
        gr = Math.floor(Math.random()*255);
        re = Math.floor(Math.random()*255);
        blu = Math.floor(Math.random()*255);
		gr1 = 255 - gr;
		re1 = 255- re;
		blu1 = 255- blu;
        return ["rgb("+ re+","+gr+","+blu+")","rgb("+ re1+","+gr1+","+blu1+")"];
      }




	/****FUNCIONES MIDI***/
  	function connectToDevice(device) {
		console.log('Connecting to device', device);
		device.onmidimessage = function(m) {
		  const [command, key, velocity] = m.data;
		  debugEl.innerText = command + '\nrotecla: ' + key;
		  if (key == 120 && modo % 2 != 0 ) setMode(modo - 1)
		  else if (key == 121 && modo % 2 == 0 ) setMode(modo + 1) 
		  
		  
		  /* 
		  else if (velocity == 90 && modo == 1)   tirarnota(58)//  tirarnota(notadearriba)
		  //elsei if (key == 76 && velocity != 90 && modo == 1 ) largarnota(58) //largarnota(notadearriba)
		  else if ( key == 76 && velocity != 0 && command != 128  && modo == 1)  tirarnota(76) // tirarnota(notadeabajo)
		  else if (key == 76 && ( command == 128 || velocity == 0 ) && modo == 1) { largarnota(76); largarnota(58) }//largarnota(notadeabajo)
		  
		  */
		  else if (command == 144 && velocity != 0) tirarnota(key-18); //cuando cambie el dispositivo key - 18 (requepodriaponerloenunavariable)
		  else if (command ==128 || velocity == 0) largarnota(key-18); // antes era key +6
		}
	}

	
	function replaceElements(inputs) {
		while(list.firstChild) {
			list.removeChild(list.firstChild)
		}
		const elements = inputs.map(e => {
			console.log(e);
			const el = document.createElement('li')
			el.innerText = `${e.name} (${e.manufacturer}) CLICK ACA`;
			el.addEventListener('click', connectToDevice.bind(null, e));
			return el;
		});

		elements.forEach(e => list.appendChild(e));
	}

	if( !navigator.requestMIDIAccess) {
		document.getElementById("errormidi").style.display="block";
	}else { 
		navigator.requestMIDIAccess()
			.then(function(access) {
				console.log('access', access);
				replaceElements(Array.from(access.inputs.values()));
				access.onstatechange = function(e) {
				replaceElements(Array.from(this.inputs.values()));
			}
		});
	
	}
	
	
	
	/******************LA MAGIA**********************/
	/******************LA MAGIA**********************/
    
	function cambiarVolumen(v) {
		console.log(v);
		volu = v/100;
	}
	
	function entrakeysalenota(n,bool){
		var ret = notas.indexOf(n);
		//if(bool) $("body").append("<br>,"+n); //(((((ESTOLOVAMOANECESITARMASADELANTE)))))
		
		return ret+corridas;
	}
  	
	//para el sampler 39 = la3, para el midi la3 = 33, ni idea que onda, ta todo traspuest? tecl = nota para el sampler
	//18 para el sampler (mano izq)
	function tirarnota(tecl){
		if (podemoTocarLaNota(tecl)){
			console.log("tironota"+tecl);
			if(tecl==54 && corridas == 18){ 
				//console.log("entro");
				resaltarNota(36,true);
				playaudio(34)
				cargarNotaHold(tecl);
			} else if (tecl==76 && corridas != 18) {
				playaudio(58);
				resaltarNota(39,true);
			} 
			else 
			{
				
				if(tecl>=corridas) {
					playaudio(tecl);
					resaltarNota(tecl-corridas, true);
					cargarNotaHold(tecl);
				}
			}
			
		}
	}
    
	function largarnota(tecl){
		//console.log("largo "+tecl);
		if(tecl==54 && corridas == 18){ 
			resaltarNota(36,false);
			sourcesCabeza[34].stop(audiocontext.currentTime);
			sourcesCabeza[34]=null;
		} else if(tecl==76 && corridas != 18)	{
			sourcesCabeza[58].stop(audiocontext.currentTime);
			sourcesCabeza[58]=null;
			resaltarNota(39,false);
		}
		else
		{
			if(notasAntitremolo.indexOf(tecl) != -1){
				resaltarNota(tecl-corridas, false);
				sourcesCabeza[tecl].stop(audiocontext.currentTime);
				sourcesCabeza[tecl]=null;
			}
		}
		descargarNotaHold(tecl);
	}
    
	function resaltarNota(n, bool){
	
	console.log("bono" +n);
		$("#bono"+n).css("opacity",bool ? "0.3": "0.0");
		if (n !=36)	$("#overnota"+n).css("opacity",bool ? "0.7": "0.02");
		if (n ==36) $("#overnota"+16).css("opacity",bool ? "0.7": "0.02");
	}

	function asignarTecla(i) {
		var txt = String.fromCharCode(notas[i]);
		if (i !=36)	$("#overnota"+i).html(txt);
		$("#bono"+i).html(txt);
		
		console.log(i + "//" + txt);
	}
	
	/***************/
	
	function toggleDispositivos(){
    	if (list.style.display == "") list.style.display="none";
		else list.style.display="";
    }

    
	/************antitremolo*****/
	function cargarNotaHold(n) {
		notasAntitremolo.push(n);
	}
  
	function descargarNotaHold(n){
		var ind = notasAntitremolo.indexOf(n);
		notasAntitremolo.splice(ind,1);
	}
  
	function podemoTocarLaNota(n){
		return notasAntitremolo.indexOf(n) == -1
	}
    
	
	/**********************************/
	function testearNotas() {
		var n =14 ; //34
		pepe = setInterval(function(){
			  tirarnota(n);
			  if (n>14)largarnota(n-1);
			  //playaudio(n);
			  
			  resaltarNota(n-18,true);
			  resaltarNota(n-40,false);
			  console.log(n++);
			  if(n>68) {clearInterval(pepe); resaltarNota(n-40,false);
			}
		},2000);
	}
  
	function pararTesteo(){
		clearInterval(pepe);
		for (var i = 18; i < 79; i++) resaltarNota(i-18,false);
	}
	
	function silenciarTodo(){
		notasAntitremolo.forEach(m => {
			console.log("silencia" +m);
			sourcesCabeza[m].stop(audiocontext.currentTime);
		  });
		notasAntitremolo.forEach(m => descargarNotaHold(m));
		for (var i = 18; i < 79; i++) resaltarNota(i-18,false);
		
	}
	
	function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
	}
	
	function buildUrlSample(band, mano){
		var testo;
		if (getQueryVariable("gh") == "t")  testo = "https://raw.githubusercontent.com/zarlanga/bandolica/master/\s/";
		else if (getQueryVariable("gh") == "l" ) testo = "/s/" // aca get url dominio o algo asi para que sea local?
		else  testo = "https://marianogodoy.com.ar/bandolica/s/"; //(------------------ asi?
		
		if (mano == "izq") testo += "mi_";
		else testo += "md_";

		
		
		testo += band + "/";
		
		var notas = mano == "izq" ?  ["1_bb2", "2_f2", "3_c3", "4_g3", "5_d4", "6_a4"] 
				: ["1_g3","2_d4","3_a4","4_e5","5_b5","6_f6"] ;
		// var notas = ["1_bb2", "2_f2", "3_c3", "4_g3", "5_d4", "6_a4"] ;
		
		//var notas = ["1_bb2", "2_f2", "3_c3", "5_d4", "6_a4", "4_g3"] ;
		
		notas = notas.map( (n) => testo + n + ".wav" )
		
		return notas;
		
	}
	
	function mostrarSamplesCargados(){
		document.getElementById("sampleStatus").innerText = `${samplesCargados} de 6 samples cargados`;
	}
  

    /******************************************************************************/ 
    /**********************AFANADO Y MANOSEADO*************************************/ 
    /******************************************************************************/ 
    /******************************************************************************/ 
    
    
	var g_instrument = 'Piano';


	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var audiocontext = new AudioContext();
	var piano7sounds = [];
	for (var i=24; i<=108; i++) piano7sounds[i] = null;
  
	/* var urlsG=["https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fd3.mp3?v=1590711281058",             "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fa4.mp3?v=1590711070510",             "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fe4.mp3?v=1590711070546",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fb5.mp3?v=1590711070887",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Ff-5.mp3?v=1590711071048"]              var urlsG=["https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fsol%202%2B.wav?v=1590779270760",             "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fre%203%2B.wav?v=1590777317892",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fla%203%2B.wav?v=1590777316166",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fmi%204%2B.wav?v=1590777316937",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fsi%204%2B.wav?v=1590777317258",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Ffa%20%235%2B.wav?v=1590777317355"];  var urlsG=["https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1G3.wav?v=1592529971334",             "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1D4.wav?v=1592529972107",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1A4.wav?v=1592529972178",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1E4.wav?v=1592529974983",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1B5.wav?v=1592529974982",            "https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1F%236.wav?v=1592529972280"];*/     

	/*var urlsG=["https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1G3.wav?v=1592529971334",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1D4.wav?v=1592529972107",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1A4.wav?v=1592529972178",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1E4.wav?v=1592529974983",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1B5.wav?v=1592529974982",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fg1F%236.wav?v=1592529972280"];
				
				//sib1 = 16
				//fa2 = 23
				//do3 = 30
				//g3=37 (---
				//re4 = 44
				//la4 = 51
				16,23,30,37,44,51
	
	var urlsG=["https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq1-SIb1.wav?v=1593541243180",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq2-FA2.wav?v=1593541374483",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq3-DO3.wav?v=1593541396076",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq4-SOL3.wav?v=1593541407627",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq5-RE4.wav?v=1593541415207",
				"https://cdn.glitch.com/a15c2729-c203-4a18-a5ba-1bf43a9da91c%2Fizq6-LA4.wav?v=1593541425728"];
	
	
	*/
	var urlsG = buildUrlSample(getQueryVariable("band") || "aa", getQueryVariable("mano"));
	
	function piano7loadsound(n){
		var request = new XMLHttpRequest();
		
		if (getQueryVariable("mano") == 'izq' )
			request.open("get", n == 16 ? urlsG[0] :n == 23 ? urlsG[1] : n == 30 ? urlsG[2] :
					n == 37 ? urlsG[3] : n == 44 ? urlsG[4] : n == 51 ? urlsG[5] : ""   , true); 
		else 
			request.open("get", n == 37 ? urlsG[0] :n == 44 ? urlsG[1] : n == 51 ? urlsG[2] :
                n == 58 ? urlsG[3] : n == 65 ? urlsG[4] : n == 72 ? urlsG[5] : ""   , true); //n dividido 7?*/
				
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.responseType = "arraybuffer";
		request.onload =
		  function() {
			audiocontext.decodeAudioData (
			  request.response,
              function(buffer) {
                if (!buffer) { console.error('error decoding file data ('+n+'): ' + url); return; }
                piano7sounds[n] = buffer;
				console.log("cargo " + n); 
              },
              function(error) { console.error('decodeAudioData error ('+n+'): ', error); 
              }
			);
			
			
			//samplesCargados++;//
			//mostrarSamplesCargados();
			
		  }
		request.onerror = function() { console.error('BufferLoader: XHR error ('+n+')'); }
		request.send('n='+n);
	}

	function piano7loadbasic(){ //*********aca no tendria que haber un if para si es mano izquierda o derecha?????
		if (getQueryVariable("mano") == 'izq' ) {
			piano7loadsound(16);
			piano7loadsound(23); piano7loadsound(30); piano7loadsound(37);
			piano7loadsound(44); 
			piano7loadsound(51);
		} else {
		piano7loadsound(37);
		piano7loadsound(44); piano7loadsound(51); piano7loadsound(58);
		piano7loadsound(65); 
		piano7loadsound(72);
		}
		
	}

	function sourcestart(n,rate,delayInSeconds) {
		if (audiocontext.state == 'suspended') audiocontext.resume();
		var indexes =[Math.pow(2,-3/12),Math.pow(2,-2/12),Math.pow(2,-1/12),1,
                  Math.pow(2,1/12),Math.pow(2,2/12),Math.pow(2,3/12)]
		var volume = volu;
		var duration = 0.6; // in seconds
		var start = audiocontext.currentTime + delayInSeconds;
		var stop = start + duration;
		var gainNode = audiocontext.createGain();
		gainNode.gain.setValueAtTime(volume, start);
		gainNode.gain.linearRampToValueAtTime(volume, stop);
		// gainNode.gain.linearRampToValueAtTime(0, stop+0.1);
		gainNode.connect(audiocontext.destination);

		var ind = rate == Math.pow(2,5/12) ? 77 : n+ indexes.indexOf(rate)-3;
		sourcesCabeza[ind] = audiocontext.createBufferSource();
		sourcesCabeza[ind].buffer = piano7sounds[n];
		sourcesCabeza[ind].playbackRate.setValueAtTime(rate,0);
		sourcesCabeza[ind].connect(gainNode);
		sourcesCabeza[ind].start(start); 
    
	}
  
	function playpiano7sound(n,delayInSeconds) {
		delayInSeconds = delayInSeconds || 0;
		if (delayInSeconds > 0) setTimeout( "recordnow("+n+");" , delayInSeconds*1000);	
		if (n == 77) return sourcestart(72, Math.pow(2,5/12),delayInSeconds);
		else {
			//if (n <= 28) return sourcestart(24,Math.pow(2,(n-24)/12),delayInSeconds);
			//if (n >= 93) return sourcestart(93,Math.pow(2,(n-93)/12),delayInSeconds);
			if (n%7 == 2) return sourcestart(n,1,delayInSeconds);
			if (n%7 == 3) return sourcestart(n-1,Math.pow(2,1/12),delayInSeconds);
			if (n%7 == 4) return sourcestart(n-2,Math.pow(2,2/12),delayInSeconds);
			if (n%7 == 5) return sourcestart(n-3,Math.pow(2,3/12),delayInSeconds);
			if (n%7 == 6) return sourcestart(n+3,Math.pow(2,-3/12),delayInSeconds);
			if (n%7 == 0) return sourcestart(n+2,Math.pow(2,-2/12),delayInSeconds);
			if (n%7 == 1) return sourcestart(n+1,Math.pow(2,-1/12),delayInSeconds);
		}
	}

	function playpianosound(context,n,delayInSeconds) {
		playpiano7sound(n,delayInSeconds);
	}

   
	function playaudio(n) {
		playpianosound(audiocontext,n);
	}

	piano7loadbasic();
    

	
	toggleDispositivos();
	
	//mostrarSamplesCargados();
	
	//setColor("#header");
	//setColor("body");
	//setColor("button");
	
	
	
	document.getElementById("titulo0").innerText = ( getQueryVariable("band") == "aa" || !getQueryVariable("band") ) ? "Doble A" :  getQueryVariable("band").toUpperCase() ;
