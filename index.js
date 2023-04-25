const h1 = document.querySelector('h1');
const p  = document.querySelector('p');
const parrafito = document.querySelector('#pid');
const input = document.querySelector('input');
const pid = document.getElementById('pid');
const pResult=document.querySelector('#result');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
//const btn = document.querySelector('#btnCalcular'); si se encuentra dentro de un formulario envia refresh a la pagina.

const form= document.querySelector('#form');

console.log({
    h1,
    p,
    parrafito,
    input,
});

h1.innerHTML = 'Patito <br> feo';
h1.classList.add('rojo');
console.log(input.value);
const img = document.createElement('img');
img.setAttribute('src', 'https://www.colon.com.uy/images/colon-images/barrio_colon/castillo-de-idiarte-borda-y-su-jardin.jpg');
pid.appendChild(img);

form.addEventListener('submit',sumarInputs);

function sumarInputs (e){
    e.preventDefault();
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: "+ sumaInputs;
}

