
let modal = document.getElementById('mimodal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


abrir.addEventListener('click' ,function(){
    modal.style.display = 'block';
});

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});
window.addEventListener('click', function(e){
    if(e.target == flex){
        modal.style.display = 'none';
    }
});


(function (){
    const sliders = [...document.querySelectorAll(".informe-text")];
    const arrownext= document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrownext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElemnt = Number(document.querySelector('.informe-text--show').dataset.id);
        

        value = currentElemnt;
        value += change;
        if(value === 0|| value == sliders.length+1){
            value = value === 0? sliders.length : 1;
        }
        sliders[currentElemnt-1].classList.toggle('informe-text--show');
        sliders[value-1].classList.toggle('informe-text--show');
    }
})()

