function elegirBotono(){plantarOverlays();var o=$("#botonoind").val(),a=document.getElementById("bono"+o).style.top,e=document.getElementById("bono"+o).style.left;a=a.substr(0,a.length-2),e=e.substr(0,e.length-2),$("#botonox").val(a),$("#botonoy").val(e),$("#bono"+o).css({opacity:"1","background-color":"green"})}function moverboton(o){var a=$("#botonoind").val(),e=$("#botonox").val(),t=$("#botonoy").val();$("#bono"+a).css("top",e+"vw"),$("#bono"+a).css("left",t+"vw")}function printValues(){for(var o="[",a=0;a<39;a++){if(document.getElementById("bono"+a))o+='["'+document.getElementById("bono"+a).style.top+'","'+document.getElementById("bono"+a).style.left+'"],';else o+='["0vw","0vw"],'}o+="]",console.table(o)}function plantarOverlays(){for(var o=0;o<39;o++)$("#bono"+o).css({opacity:"0.5","background-color":"yellow"})}$(document).ready(function(){$("body").keydown(function(o){var a=o.keyCode||o.which;o.preventDefault(),32!=a?tirarnota(entrakeysalenota(a,!0)):setMode(modo%2==0?modo+1:modo-1)}),$("body").keyup(function(o){var a=o.keyCode||o.which;32!=a&&largarnota(entrakeysalenota(a))})}),$(document).ready(function(){for(var o=!0,a=0;a<40;a++){var e=o?30:150,t=`<div class="overlay"style="background:${`rgb(${e},${e},${e}) `};opacity:0.02;" id="overnota${a}"></div>`,n=`<div class="botonota" style="opacity:0.0;" id="bono${a}"></div>`;$("#tiagarro0").append(n),a<24?$("#tiagarro1").append(t):$("#tiagarro2").append(t),o=!o}var r="izq"!=getQueryVariable("mano"),s="true"!=getQueryVariable("cerr");setMode(r&&s?0:r&&!s?1:!r&&s?2:3),console.log("largo"+posbot.length)});for(var modo,pepe,estaAbriendo=!1,notasAntitremolo=[],notas=[],notasD_A=[65,90,87,51,114,52,88,69,83,84,53,70,89,68,71,85,82,72,86,73,67,66,188,74,78,54,75,55,77,56,118,117,null,116,null,null,115],notasD_C=[65,90,87,114,52,51,88,68,83,69,84,53,70,54,89,55,71,85,188,72,67,82,73,66,74,116,78,117,75,56,118,77,null,null,115,null,null,86],notasI_A=[188,null,90,77,51,57,75,73,115,52,116,88,85,117,69,54,83,118,78,53,68,82,56,70,84,74,71,66,89,55,72,67,119,86],notasI_C=[null,77,51,null,90,188,57,69,115,83,116,75,56,55,52,117,68,78,73,82,74,70,53,84,54,71,89,118,72,85,67,119,86,null,null,66,88],notasFull=[notasD_A,notasD_C,notasI_A,notasI_C],posbot=[],posbotD_A=[["16.8vw","9.9vw"],["20.3vw","11.2vw"],["12.4vw","13vw"],["8.8vw","14.7vw"],["5.9vw","17.5vw"],["8.1vw","20.5vw"],["19.3vw","16.6vw"],["11.4vw","18.3vw"],["15.4vw","14.9vw"],["10.8vw","28.5vw"],["8vw","26.1vw"],["14.2vw","25.1vw"],["11.4vw","33.4vw"],["14.6vw","19.9vw"],["14.6vw","30.4vw"],["12.5vw","39vw"],["10.7vw","23.3vw"],["14.8vw","35.2vw"],["18vw","26.8vw"],["13.8vw","44.2vw"],["18.3vw","21.7vw"],["17.9vw","31.9vw"],["21vw","47.6vw"],["16.1vw","40.7vw"],["18.4vw","36.8vw"],["8vw","31.5vw"],["17.3vw","45.8vw"],["8.9vw","37.2vw"],["19.6vw","42.5vw"],["10.1vw","42.5vw"],["6.9vw","40.8vw"],["5.8vw","34.9vw"],["3.9vw","38.1vw"],["5.2vw","28.9vw"],["3.4vw","32.4vw"],["3.1vw","26.4vw"],["5.3vw","23.2vw"],["0vw","0vw"],["3.3vw","19.6vw"]],posbotD_C=[["16.8vw","9.9vw"],["20.2vw","11.3vw"],["12.4vw","13.1vw"],["5.8vw","17.5vw"],["8.2vw","20.5vw"],["8.8vw","14.7vw"],["19.1vw","16.7vw"],["14.7vw","19.9vw"],["15.4vw","14.8vw"],["11.4vw","18.2vw"],["10.7vw","28.5vw"],["8vw","26.1vw"],["14.4vw","25.2vw"],["8vw","31.5vw"],["11.4vw","33.4vw"],["8.8vw","37.3vw"],["14.5vw","30.4vw"],["12.5vw","39vw"],["20.8vw","47.6vw"],["14.8vw","35.1vw"],["18.2vw","21.8vw"],["10.8vw","23.4vw"],["13.9vw","44.2vw"],["18vw","31.9vw"],["16.1vw","40.7vw"],["5.2vw","28.9vw"],["18.5vw","36.8vw"],["5.8vw","35vw"],["17.3vw","45.8vw"],["10.2vw","42.6vw"],["7.1vw","40.9vw"],["19.5vw","42.6vw"],["3.9vw","38.2vw"],["3.3vw","32.4vw"],["5.4vw","23.2vw"],["3vw","26.4vw"],["3.3vw","19.9vw"],["0vw","0vw"],["0vw","0vw"],["17.7vw","26.8vw"]],posbotI_A=[["18.6vw","47.2vw"],["0vw","0vw"],["19vw","7.5vw"],["16.9vw","41.3vw"],["8.1vw","10.2vw"],["9.7vw","47.3vw"],["14.9vw","45.2vw"],["11.3vw","43.2vw"],["4.2vw","18.9vw"],["6.8vw","16.1vw"],["3.6vw","25.6vw"],["18vw","11.9vw"],["9.2vw","37.3vw"],["3.7vw","32.2vw"],["10vw","13.3vw"],["5.7vw","28.8vw"],["14.7vw","9.7vw"],["4.6vw","38.7vw"],["15.8vw","35.2vw"],["5.8vw","22.6vw"],["13.2vw","15.7vw"],["8.7vw","19.3vw"],["7.5vw","41.3vw"],["12.4vw","21.7vw"],["8.4vw","25.6vw"],["13.2vw","39.1vw"],["12vw","27.7vw"],["15.6vw","29.4vw"],["8.7vw","31.3vw"],["6.2vw","34.9vw"],["12.3vw","33vw"],["16.4vw","17.6vw"],["6.2vw","45.4vw"],["15.6vw","23.8vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"],["0vw","0vw"]],posbotI_C=[["0vw","0vw"],["16.9vw","41.3vw"],["8.1vw","10.2vw"],["0vw","0vw"],["19vw","7.5vw"],["18.7vw","47.3vw"],["9.7vw","47.2vw"],["9.9vw","13.3vw"],["4.2vw","18.8vw"],["14.7vw","9.8vw"],["3.6vw","25.6vw"],["14.9vw","45.2vw"],["7.5vw","41.3vw"],["6.2vw","34.8vw"],["6.8vw","16.1vw"],["3.7vw","32.3vw"],["13.1vw","15.7vw"],["15.8vw","35.2vw"],["11.2vw","43.2vw"],["8.8vw","19.3vw"],["13.2vw","39.1vw"],["12.3vw","21.7vw"],["5.9vw","22.6vw"],["8.49vw","25.99vw"],["5.7vw","28.8vw"],["12.1vw","27.7vw"],["8.7vw","31.4vw"],["4.6vw","38.7vw"],["12.4vw","33.1vw"],["9.2vw","37.2vw"],["16.4vw","17.6vw"],["6.2vw","45.4vw"],["15.6vw","23.7vw"],["0vw","0vw"],["0vw","0vw"],["15.5vw","29.5vw"],["17.9vw","12vw"],["0vw","0vw"],["0vw","0vw"]],posbotFull=[posbotD_A,posbotD_C,posbotI_A,posbotI_C],corridas="izq"==getQueryVariable("mano")?18:39,sourcesCabeza=[],i=0;i<100;i++)sourcesCabeza[i]=null;var volu=.6,samplesCargados=0;const list=document.getElementById("midi-list"),debugEl=document.getElementById("debug");function bajarpdf(){var o="img/mapas/";switch(modo){case 0:o+="der_abriendo.pdf";break;case 1:o+="der_cerrando.pdf";break;case 2:o+="izq_abriendo.pdf";break;case 3:o+="izq_cerrando.pdf"}console.log(o),window.open(o,"_blank")}function cambiarMano(){var o="./bandolica.html?";getQueryVariable("gh")&&(o+="&gh=t"),getQueryVariable("band")&&(o+="&band="+getQueryVariable("band")),getQueryVariable("mano")&&"der"!=getQueryVariable("mano")||(o+="&mano=izq"),window.open(o,"_self")}function setManito(o){o<2?($("#manito").html("Ir a mano izquierda <br><i class='fa fa-hand-paper-o ' style='font-size:40px; '></i>"),$("#manito").css({display:"block",right:"",left:"0px","border-radius":"0px 15px 15px 0px "}),$("#manito").addClass("abreIzquierda")):($("#manito").html("Ir a mano derecha<br><i class='fa fa-hand-paper-o espejado' style='font-size:40px; '></i>"),$("#manito").css({display:"block",right:"0px",left:"","border-radius":"15px 0px 0px 15px"}),$("#manito").addClass("abreDerecha"))}function setMode(o){var a=o%2==0?"abriendo":"cerrando",e=o<2?"derecha":"izquierda",t=["D_A","D_C","I_A","I_C"],n=[`img_lab/teclas_${t[o]}.jpg`,`img/pentagramas/penta_${t[o]}_1.jpg`,`img/pentagramas/penta_${t[o]}_2.jpg`];notas=notasFull[o],posbot=posbotFull[o],setManito(o),modo=o;var r=getQueryVariable("band")||"aa";n[0]=`img/teclados/${r}_${e}.${"emu"!=r?"png":"jp2"} `,$("#img0").attr("src",n[0]),$("#imgP1").attr("src",n[1]),$("#imgP2").attr("src",n[2]),$("#titulo").html(a),reordenarOverlays()}function cambiaModo(){if(console.log("cambioModo"),estaAbriendo=!estaAbriendo){$("#titulo").html("abriendo"),notas=[188,null,90,77,51,57,75,73,115,52,116,88,85,117,69,54,83,118,78,53,68,82,56,70,84,74,71,66,89,55,72,67,119,86],$("#img0").css("display",""),$("#img1").css("display","none");for(var o=0;o<37;o++)$("#bono"+o).css("top",posbot[o][0]),$("#bono"+o).css("left",posbot[o][1]),"0vw"==posbot[o][0]?$("#bono"+o).css("display","none"):$("#bono"+o).css("display","")}else{$("#titulo").html("cerrando"),$("#img0").css("display","none"),$("#img1").css("display",""),notas=[null,77,51,null,90,188,57,69,115,83,116,75,56,55,52,117,68,78,73,82,74,70,53,84,54,71,89,118,72,85,67,119,86,null,null,66,88];for(o=0;o<37;o++)$("#bono"+o).css("top",posbot1[o][0]),$("#bono"+o).css("left",posbot1[o][1]),"0vw"==posbot1[o][0]?$("#bono"+o).css("display","none"):$("#bono"+o).css("display","")}silenciarTodo()}function reordenarOverlays(){for(var o=0;o<posbot.length;o++)$("#bono"+o).css("top",posbot[o][0]),$("#bono"+o).css("left",posbot[o][1]),"0vw"==posbot[o][0]?$("#bono"+o).css("display","none"):$("#bono"+o).css("display","")}function setColor(o){var a=getColor3();$(o).css("background-color",a[0]),$(o).css("color",a[1])}function getColor3(){return gr=Math.floor(255*Math.random()),re=Math.floor(255*Math.random()),blu=Math.floor(255*Math.random()),gr1=255-gr,re1=255-re,blu1=255-blu,["rgb("+re+","+gr+","+blu+")","rgb("+re1+","+gr1+","+blu1+")"]}function connectToDevice(o){console.log("Connecting to device",o),o.onmidimessage=function(o){const[a,e,t]=o.data;debugEl.innerText=a+"\nrotecla: "+e,120==e&&modo%2!=0?setMode(modo-1):121==e&&modo%2==0?setMode(modo+1):144==a&&0!=t?tirarnota(e-18):128!=a&&0!=t||largarnota(e-18)}}function replaceElements(o){for(;list.firstChild;)list.removeChild(list.firstChild);o.map(o=>{console.log(o);const a=document.createElement("li");return a.innerText=`${o.name} (${o.manufacturer}) CLICK ACA`,a.addEventListener("click",connectToDevice.bind(null,o)),a}).forEach(o=>list.appendChild(o))}function cambiarVolumen(o){console.log(o),volu=o/100}function entrakeysalenota(o,a){return notas.indexOf(o)+corridas}function tirarnota(o){podemoTocarLaNota(o)&&(console.log("tironota"+o),54==o&&18==corridas?(resaltarNota(36,!0),playaudio(34),cargarNotaHold(o)):76==o&&18!=corridas?(playaudio(58),resaltarNota(39,!0)):o>=corridas&&(playaudio(o),resaltarNota(o-corridas,!0),cargarNotaHold(o)))}function largarnota(o){54==o&&18==corridas?(resaltarNota(36,!1),sourcesCabeza[34].stop(audiocontext.currentTime),sourcesCabeza[34]=null):76==o&&18!=corridas?(sourcesCabeza[58].stop(audiocontext.currentTime),sourcesCabeza[58]=null,resaltarNota(39,!1)):-1!=notasAntitremolo.indexOf(o)&&(resaltarNota(o-corridas,!1),sourcesCabeza[o].stop(audiocontext.currentTime),sourcesCabeza[o]=null),descargarNotaHold(o)}function resaltarNota(o,a){console.log("bono"+o),$("#bono"+o).css("opacity",a?"0.3":"0.0"),36!=o&&$("#overnota"+o).css("opacity",a?"0.7":"0.02"),36==o&&$("#overnota16").css("opacity",a?"0.7":"0.02")}function asignarTecla(o){var a=String.fromCharCode(notas[o]);36!=o&&$("#overnota"+o).html(a),$("#bono"+o).html(a),console.log(o+"//"+a)}function toggleDispositivos(){""==list.style.display?list.style.display="none":list.style.display=""}function cargarNotaHold(o){notasAntitremolo.push(o)}function descargarNotaHold(o){var a=notasAntitremolo.indexOf(o);notasAntitremolo.splice(a,1)}function podemoTocarLaNota(o){return-1==notasAntitremolo.indexOf(o)}function testearNotas(){var o=14;pepe=setInterval(function(){tirarnota(o),o>14&&largarnota(o-1),resaltarNota(o-18,!0),resaltarNota(o-40,!1),console.log(o++),o>68&&(clearInterval(pepe),resaltarNota(o-40,!1))},2e3)}function pararTesteo(){clearInterval(pepe);for(var o=18;o<79;o++)resaltarNota(o-18,!1)}function silenciarTodo(){notasAntitremolo.forEach(o=>{console.log("silencia"+o),sourcesCabeza[o].stop(audiocontext.currentTime)}),notasAntitremolo.forEach(o=>descargarNotaHold(o));for(var o=18;o<79;o++)resaltarNota(o-18,!1)}function getQueryVariable(o){for(var a=window.location.search.substring(1).split("&"),e=0;e<a.length;e++){var t=a[e].split("=");if(t[0]==o)return t[1]}return!1}function buildUrlSample(o,a){var e;e="t"==getQueryVariable("gh")?"https://raw.githubusercontent.com/zarlanga/bandolica/master/s/":"l"==getQueryVariable("gh")?"/s/":"https://bandolica.com/bandolica/s/",e+="izq"==a?"mi_":"md_",e+=o+"/";var t="izq"==a?["1_bb2","2_f2","3_c3","4_g3","5_d4","6_a4"]:["1_g3","2_d4","3_a4","4_e5","5_b5","6_f6"];return t=t.map(o=>e+o+".wav")}function mostrarSamplesCargados(){document.getElementById("sampleStatus").innerText=`${samplesCargados} de 6 samples cargados`}navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(function(o){console.log("access",o),replaceElements(Array.from(o.inputs.values())),o.onstatechange=function(o){replaceElements(Array.from(this.inputs.values()))}}):document.getElementById("errormidi").style.display="block";var g_instrument="Piano",AudioContext=window.AudioContext||window.webkitAudioContext,audiocontext=new AudioContext,piano7sounds=[];for(i=24;i<=108;i++)piano7sounds[i]=null;var urlsG=buildUrlSample(getQueryVariable("band")||"aa",getQueryVariable("mano"));function piano7loadsound(o){var a=new XMLHttpRequest;"izq"==getQueryVariable("mano")?a.open("get",16==o?urlsG[0]:23==o?urlsG[1]:30==o?urlsG[2]:37==o?urlsG[3]:44==o?urlsG[4]:51==o?urlsG[5]:"",!0):a.open("get",37==o?urlsG[0]:44==o?urlsG[1]:51==o?urlsG[2]:58==o?urlsG[3]:65==o?urlsG[4]:72==o?urlsG[5]:"",!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.responseType="arraybuffer",a.onload=function(){audiocontext.decodeAudioData(a.response,function(a){a?(piano7sounds[o]=a,console.log("cargo "+o)):console.error("error decoding file data ("+o+"): "+url)},function(a){console.error("decodeAudioData error ("+o+"): ",a)})},a.onerror=function(){console.error("BufferLoader: XHR error ("+o+")")},a.send("n="+o)}function piano7loadbasic(){"izq"==getQueryVariable("mano")?(piano7loadsound(16),piano7loadsound(23),piano7loadsound(30),piano7loadsound(37),piano7loadsound(44),piano7loadsound(51)):(piano7loadsound(37),piano7loadsound(44),piano7loadsound(51),piano7loadsound(58),piano7loadsound(65),piano7loadsound(72))}function sourcestart(o,a,e){"suspended"==audiocontext.state&&audiocontext.resume();var t=[Math.pow(2,-.25),Math.pow(2,-2/12),Math.pow(2,-1/12),1,Math.pow(2,1/12),Math.pow(2,2/12),Math.pow(2,.25)],n=volu,r=audiocontext.currentTime+e,s=r+.6,v=audiocontext.createGain();v.gain.setValueAtTime(n,r),v.gain.linearRampToValueAtTime(n,s),v.connect(audiocontext.destination);var l=a==Math.pow(2,5/12)?77:o+t.indexOf(a)-3;sourcesCabeza[l]=audiocontext.createBufferSource(),sourcesCabeza[l].buffer=piano7sounds[o],sourcesCabeza[l].playbackRate.setValueAtTime(a,0),sourcesCabeza[l].connect(v),sourcesCabeza[l].start(r)}function playpiano7sound(o,a){return(a=a||0)>0&&setTimeout("recordnow("+o+");",1e3*a),77==o?sourcestart(72,Math.pow(2,5/12),a):o%7==2?sourcestart(o,1,a):o%7==3?sourcestart(o-1,Math.pow(2,1/12),a):o%7==4?sourcestart(o-2,Math.pow(2,2/12),a):o%7==5?sourcestart(o-3,Math.pow(2,.25),a):o%7==6?sourcestart(o+3,Math.pow(2,-.25),a):o%7==0?sourcestart(o+2,Math.pow(2,-2/12),a):o%7==1?sourcestart(o+1,Math.pow(2,-1/12),a):void 0}function playpianosound(o,a,e){playpiano7sound(a,e)}function playaudio(o){playpianosound(audiocontext,o)}piano7loadbasic(),toggleDispositivos(),document.getElementById("titulo0").innerText="aa"!=getQueryVariable("band")&&getQueryVariable("band")?getQueryVariable("band").toUpperCase():"Doble A";