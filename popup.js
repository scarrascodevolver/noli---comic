/* ABRIR POPUP 1 */
var btnAbrirPopup= document.getElementById('btn-abrir-popup'),  
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');



btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    
})

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');

})
/* ABRIR POPUP 2*/

var btnAbrirPopup2= document.getElementById('btn-abrir-popup2'),  
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');



btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    
})

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');

})
/* ABRIR POPUP 3 */

var btnAbrirPopup3= document.getElementById('btn-abrir-popup3'),  
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');



btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
/*     alert("holaaaaaaa") */
    
});

btnCerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');

})



