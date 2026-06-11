const abrirBtn = document.getElementById("abrirBtn");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");
const musica = document.getElementById("musica");

abrirBtn.addEventListener("click", ()=>{

inicio.style.display="none";

contenido.style.display="block";

musica.play();

window.scrollTo({
top:0,
behavior:"smooth"
});

});

const fechaEvento =
new Date("July 11, 2026 10:00:00").getTime();

setInterval(()=>{

const ahora = new Date().getTime();

const diferencia = fechaEvento-ahora;

const dias =
Math.floor(diferencia/(1000*60*60*24));

const horas =
Math.floor(
(diferencia%(1000*60*60*24))
/
(1000*60*60)
);

const minutos =
Math.floor(
(diferencia%(1000*60*60))
/
(1000*60)
);

const segundos =
Math.floor(
(diferencia%(1000*60))
/
1000
);

document.getElementById("dias")
.textContent = dias;

document.getElementById("horas")
.textContent = horas;

document.getElementById("minutos")
.textContent = minutos;

document.getElementById("segundos")
.textContent = segundos;

},1000);

const secciones =
document.querySelectorAll(".seccion");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

secciones.forEach(sec=>{

observer.observe(sec);

});




for(let i=0;i<20;i++){

let butterfly =
document.createElement("img");

butterfly.src =
"decor/butterfly.png";


butterfly.classList.add("mariposa");
if(i < 12){
    butterfly.classList.add("inicio-mariposa");
}else{
    butterfly.classList.add("fondo-mariposa");
}


butterfly.style.left =
Math.random()*100+"vw";

butterfly.style.top =
Math.random()*100+"vh";

butterfly.style.width =
(10+Math.random()*18)+"px";

if(i < 12){
    posicionarMariposaPortada(
        butterfly,
        i
    );
}else{
    document.body.appendChild(
        butterfly
    );
    animarMariposa(
        butterfly
    );
}

animarMariposa(butterfly);

}


function animarMariposa(el){

setInterval(()=>{

el.style.transition="8s";

el.style.left=
Math.random()*100+"vw";

el.style.top=
Math.random()*100+"vh";

},8000);

}



const musicBtn =        
document.getElementById(
"musicBtn"
);

musicBtn.addEventListener(
"click",
()=>{

if(musica.paused){

musica.play();

musicBtn.innerHTML=
"🔊 Música";

}else{

musica.pause();

musicBtn.innerHTML=
"🔇 Música";

}

});



function posicionarMariposaPortada(
el,
indice
){

const contenedor =
document.querySelector(
".contenedor-portada"
);

contenedor.appendChild(el);

const radio = 220;

const angulo =
(indice / 12) *
Math.PI * 2;

el.style.position = "absolute";

el.style.left =
Math.cos(angulo) *
radio + "px";

el.style.top =
Math.sin(angulo) *
radio + "px";

el.animate(

[
{
transform:
"translate(0,0)"
},
{
transform:
"translate(15px,-15px)"
},
{
transform:
"translate(0,0)"
}
],

{
duration:
4000 +
Math.random()*3000,

iterations:
Infinity

}

);

}