var inputs = document.querySelectorAll('.form-control');
inputs.forEach((input)=>{
    input.addEventListener('focus', () => {
        input.style.backgroundColor ="#1C140F";
    })
});
inputs.forEach((input)=>{
    input.addEventListener('blur', () => {
        input.style.backgroundColor ="rgba(255, 255, 255, 0.07)";
    })
});

var bars = document.querySelector('.bars')
var ul = document.querySelector('.nav .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2')
})
var lastP = document.querySelector('.lastP');
const date = new Date();
let year = date.getFullYear();

lastP.innerHTML =`Copyright ® ${year} Lorem All rights Rcerved`;


var links = document.querySelectorAll('.links ul li');

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        link.classList.remove('active2')
    })
})