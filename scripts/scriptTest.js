/*******************************************************************/
/*******************************************************************/
/*

	1) el carrito 
2) las fotos que se agrandan en el celular 
3) lo de chrome
4) armar las redes y sincronizar 
5) siguen cargando lento ... serán las fotos ? Probar bajarlas más de calidad

Dice que 90 le puso al de más arriba

https://obfuscator.io/
	
  -cambiar imagenes (ta, borrarle el moco a la disposicion 3) 
  -cambiar teclas (z,s,e,3,f4)
  -cambiar sonidos
  -cambiar los nros que se corren los indices (el viejo es -39)
  -cambiar posiciones del overlay
  -creo que nada mas? el indentado y la concha de la vaca?
  
  -ver en que casos combiene hacer directamente pares de array (para las notas? para los buffers?, para las posiciones casi seguro que si)
  
  
  on key press (barra espaciadora) hacer una funcion que cambia de modo.
cambio de modo :
  - cambiar el array de notas y teclas del teclado (y)
  - cambiar la imagen (y)
  - cambiar los overlays (hacer otro array de posiciones? y mandarle un for cabeza que cambie style.top, style.left?)
  - (cortar cualquier nota que haya quedado sonando) (y)
  - y de todo esto que pueda volver para atras (ponele tirarle un boolean como parametro? mejor un numero y que sobreescriba violento? 
  
    
despues va a haber que hacerle otro cambio de modo que seria todo lo de arriba 
     +.... cambiar los samples?
	 +cambiar una variable que corrija el -39 de la funcion playaudio(tecl)
  
  -preguntar: la barra espaciadora que la mantengan apretada y en key up volver al anterior? (se podrian tirar menos notas asi)
  -como va a hacer en el midi para cambiar de abierto a cerrado y de una mano a otra?
  
  */
/*******************************************************************/
/*******************************************************************/

/*******************************************************************/
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
 
  /*

  [215.5px,468.066px],[0px,0px],[228.43px,12.93px],[198.26px,399.968px],[88.786px,43.962px],[106.888px,468.066px],[172.4px,448.24px],[125.852px,421.518px],[39.652px,146.54px],[73.27px,112.06px],[35.342px,224.12px],[212.052px,63.788px],[106.026px,356.006px],[37.928px,295.666px],[111.198px,81.028px],[64.65px,258.6px],[173.262px,43.1px],[50.858px,374.97px],[185.33px,332.732px],[59.478px,187.054px],[149.988px,106.888px],[96.544px,155.16px],[85.338px,402.554px],[138.782px,177.572px],[92.234px,220.672px],[152.574px,379.28px],[135.334px,246.532px],[181.02px,267.22px],[93.958px,291.356px],[63.788px,327.56px],[142.23px,310.32px],[193.088px,131.886px],[66.374px,445.654px],[180.158px,198.26px],[0px,0px],[0px,0px],[0px,0px],[0px,0px],[0px,0px]
  [163.78px,37.066px],[200.846px,54.306px],[112.06px,72.408px],[43.962px,113.784px],[73.27px,148.264px],[74.994px,92.234px],[188.778px,104.302px],[140.506px,143.092px],[149.126px,87.924px],[101.716px,124.128px],[94.82px,231.016px],[70.684px,201.708px],[136.196px,196.536px],[68.96px,260.324px],[102.578px,282.736px],[75.856px,315.492px],[137.058px,243.946px],[114.646px,335.318px],[209.466px,424.966px],[142.23px,298.252px],[178.434px,159.47px],[98.268px,175.848px],[131.024px,386.176px],[174.986px,265.496px],[155.16px,352.558px],[39.652px,233.602px],[184.468px,317.216px],[42.238px,288.77px],[168.09px,406.002px],[93.958px,369.798px],[56.892px,347.386px],[193.088px,370.66px],[24.136px,325.836px],[12.068px,268.944px],[38.79px,173.262px],[0px,0px],[0px,0px],[0px,0px],[0px,0px]]
  //530.39 (--- ancho de la imagen 
   517.19
  var posbotones0=[["179.452px","38.012px"],["217.464px","55.692px"],["124.644px","75.14px"],["85.748px","95.472px"],["53.924px","118.456px"],["83.98px","155.584px"],["205.972px","108.732px"],["114.036px","129.948px"],["162.656px","92.82px"],["107.848px","242.216px"],["82.212px","212.16px"],["150.28px","206.856px"],["114.92px","296.14px"],["153.816px","149.396px"],["150.28px","254.592px"],["127.296px","350.064px"],["111.384px","184.756px"],["156.468px","312.052px"],["192.712px","221.884px"],["144.976px","404.872px"],["194.48px","165.308px"],["190.944px","277.576px"],["227.188px","444.652px"],["169.728px","369.512px"],["200.668px","332.384px"],["79.56px","273.156px"],["183.872px","425.204px"],["87.516px","329.732px"],["209.508px","388.96px"],["106.964px","387.192px"],["68.068px","363.324px"],["52.156px","301.444px"],["32.708px","341.224px"],["49.504px","243.984px"],["19.448px","281.996px"],["23.868px","213.044px"],["47.736px","181.22px"],["24.752px","152.048px"],["0px","0px"]];
  
  var posbotones1= [["215.5px","468.066px"],["0px","0px"],["228.43px","12.93px"],["198.26px","399.968px"],["88.786px","43.962px"],["106.888px","468.066px"],["172.4px","448.24px"],["125.852px","421.518px"],["39.652px","146.54px"],["73.27px","112.06px"],["35.342px","224.12px"],["212.052px","63.788px"],["106.026px","356.006px"],["37.928px","295.666px"],["111.198px","81.028px"],["64.65px","258.6px"],["173.262px","43.1px"],["50.858px","374.97px"],["185.33px","332.732px"],["59.478px","187.054px"],["149.988px","106.888px"],["96.544px","155.16px"],["85.338px","402.554px"],["138.782px","177.572px"],["92.234px","220.672px"],["152.574px","379.28px"],["135.334px","246.532px"],["181.02px","267.22px"],["93.958px","291.356px"],["63.788px","327.56px"],["142.23px","310.32px"],["193.088px","131.886px"],["66.374px","445.654px"],["180.158px","198.26px"],["0px","0px"],["0px","0px"],["0px","0px"],["0px","0px"],["0px","0px"]]
  var ancho = 664.8;
  var posbotones=[["0px","0px"],["229.356px","516.328px"],["90.856px","64.264px"],["0px","0px"],["268.136px","24.376px"],["251.516px","601.644px"],["114.124px","603.86px"],["118.556px","111.908px"],["27.7px","192.792px"],["197.224px","62.048px"],["23.268px","292.512px"],["197.224px","577.268px"],["86.424px","518.544px"],["58.724px","424.364px"],["70.912px","149.58px"],["25.484px","383.368px"],["168.416px","141.824px"],["212.736px","431.012px"],["138.5px","542.92px"],["99.72px","204.98px"],["170.632px","488.628px"],["154.012px","232.68px"],["52.076px","244.868px"],["94.18px","288.08px"],["59.832px","336.832px"],["148.472px","320.212px"],["97.504px","377.828px"],["43.212px","484.196px"],["157.336px","402.204px"],["111.908px","460.928px"],["221.6px","175.064px"],["62.048px","573.944px"],["206.088px","259.272px"],["0px","0px"],["0px","0px"],["208.304px","347.912px"],["247.084px","87.532px"],["0px","0px"],["0px","0px"]];
                 
  var posbotones2 = []
for (var i =0; i<37;i++){
  var y = posbotones[i][0]
  var x = posbotones[i][1]
  y = y.substr(0, y.length -3);
  x = x.substr(0, x.length -3);
  y = Math.floor((y / (ancho/60))*100)/100;
  x = Math.floor((x /  (ancho/60))*100)/100;
  posbotones2[i] = [y+"vw", x+"vw"]
} 
var testo = "[";
for (var i =0; i<37;i++){
	testo += "[\""+posbotones2[i][0] + "\",\"" + posbotones2[i][1] + "\"],";
}
 */

/***********************las keys **************************/
    
	$(document).ready(function(){
      
	  $("body").keydown(function(e){
	  if(document.getElementById("desbloquear").style.display == "none"){
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
	    }
    }
  );
      
      
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
			var testo= `<div class="overlay"style="background:${color};opacity:0.02;" id="overnota${i}" onclick="tirarnota(${i} + corridas); setTimeout(function(){largarnota(${i} + corridas)},500)" ></div>`
			//var testo2= `<div class="botonota" style="background:white;opacity:0.0;top:${posbot[i][0]};left:${posbot[i][1]}" id="bono${i}"></div>`
			var testo2= `<div class="botonota" onclick="tirarnota(${i} + corridas); setTimeout(function(){largarnota(${i} + corridas)},500)" style="opacity:0.0;" id="bono${i}"></div>`;
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
			//$("#manito").html("Ir a mano izquierda <br><i class='fa fa-hand-paper-o ' style='font-size:40px; '></i>");
			$("#manito").html("CAMBIAR DE MANO<br><i class='fa fa-hand-paper-o ' style='font-size:40px; '></i>");
			$("#manito").css({"display":"block","right":"","left":"0px","border-radius":"0px 15px 15px 0px "})
			
			$("#manito").addClass("abreIzquierda");
			
			
			
		} else {
			//$("#manito").html("Ir a mano derecha<br><i class='fa fa-hand-paper-o espejado' style='font-size:40px; '></i>");
			$("#manito").html("CAMBIAR DE MANO<br><i class='fa fa-hand-paper-o espejado' style='font-size:40px; '></i>");
			$("#manito").css({"display":"block","right":"0px","left":"","border-radius":"15px 0px 0px 15px"})
			$("#manito").addClass("abreDerecha");
		
			
		
		}
		
	}
	

    /***********CAMBIO DE MODOO******/
	
	function setMode(n) {
	//cambiar variable notas, cambiar variable posbot, cambiar las tres imagenes, algo mas? uhcomomierdahagoconlosamples... (mirar como se hacia el load)
		var abr = n % 2 == 0 ? "Abriendo" : "Cerrando";
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
		imgsrc[0] = `img/teclados/${bando}_${man}.${bando != "emu" ? "png": "jpg"} `;
		
		
		// else  imgsrc[0] = "img_lab/manoIzqBB.png";
		// imgsrc[0] = bando == "aa" ?"img_lab/rectangularbordess.png" : 
		
		
		//-----
		
		$("#img0").attr("src", imgsrc[0]);
		$("#imgP1").attr("src", imgsrc[1]);
		$("#imgP2").attr("src", imgsrc[2]);
		
		
		//$("#titulo").html( n % 2 == 0 ? "Abriendo" : "Cerrando");
		
		$("#titulo").html( abr);
		$("#titulo1").html("MANO " + man.toUpperCase());
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
		bandStatus(2);
		device.onmidimessage = function(m) {
		  const [command, key, velocity] = m.data;
		  debugEl.innerText = command + '\nnrotecla: ' + key + '\nvelocity ' +velocity;
		  if (key == 120 && modo % 2 != 0 ) setMode(modo - 1)
		  else if (key == 121 && modo % 2 == 0 ) setMode(modo + 1) 
		  
		  
		  
		  else if ( key == 76 && velocity == 90 && modo == 1)     tirarnota(76) //  tirarnota(notadearriba) velocity 90 es la de abajo
		  //elsei if (key == 76 && velocity != 90 && modo == 1 ) largarnota(58) //largarnota(notadearriba)
		  else if ( key == 76 && velocity != 0 && command != 128  && modo == 1) tirarnota(58) // tirarnota(notadeabajo)
		  else if (key == 76 && ( command == 128 || velocity == 0 ) && modo == 1) { largarnota(76); largarnota(58) }//largarnota(notadeabajo)
		  
		  
		  else if (command == 144 && velocity != 0) tirarnota(key-18); //cuando cambie el dispositivo key - 18 (requepodriaponerloenunavariable)
		  else if (command ==128 || velocity == 0) largarnota(key-18); // antes era key +6
		}

	}

	
	function replaceElements(inputs) {
		while(list.firstChild) {
			list.removeChild(list.firstChild)
		}
		
		bandStatus(0);
		const elements = inputs.map(e => {
			//console.log(e);

			document.getElementById("debug").innerHTML += `nombre: ${e.name} <br>`
			const el = document.createElement('li')
			el.innerHTML = `${e.name} (${e.manufacturer})`;
			//if (el.innerHTML.substring(0,4).toLowerCase() == "ardu" || el.innerHTML.substring(0,6).toLowerCase() == "bandol"  ) {
				document.getElementById("bandcon").addEventListener('click', connectToDevice.bind(null, e));
				
				bandStatus(1);
			//}
			//el.addEventListener('click', connectToDevice.bind(null, e));
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
	
	function bandStatus(i) {
		var sta = document.getElementById("bandcon");
		var culo = document.getElementById("circulo");
		switch (i){
		case 0: 
			sta.innerHTML ="CONECTAR BANDOLICA";
			culo.style.backgroundColor="transparent";
			break;
		case 1:
			sta.innerHTML ="BANDOLICA DISPONIBLE: CLICK PARA ACTIVAR";
			culo.style.backgroundColor="white";
			break;
		case 2:
			sta.innerHTML ="BANDOLICA ACTIVADA";
			culo.style.backgroundColor="green";
			break;
		}
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
				cargarNotaHold(tecl);
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
		} else if( (tecl==76 || tecl == 58 ) && corridas != 18)	{
			sourcesCabeza[58].stop(audiocontext.currentTime);
			sourcesCabeza[58]=null;
			resaltarNota(39,false);
			resaltarNota(19,false);
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
		if (getQueryVariable("gh") == "t")  testo = "https://raw.githubusercontent.com/zarlanga/bandoneon/master/\s/";
		else if (getQueryVariable("gh") == "l" ) testo = "/s/" // aca get url dominio o algo asi para que sea local?
		else  testo = "https://bandolica.com/s/"; //(------------------ asi?
		
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
  
