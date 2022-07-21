var bars = document.querySelector('.bars')
var ul = document.querySelector('.nav .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2');
})


var arr = ['background-image: url("images/Rectangle 6.png");','background-image: url("images/Rectangle 25 (1).png");']
var buttonLeft = document.querySelector('.btns1');
var buttonRight = document.querySelector('.btns2');
// var image = document.querySelector('.image');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

var image = document.querySelector('.header-image');
console.log(image.getAttribute('style'));
buttonRight.addEventListener('click',()=>{
    image.setAttribute('style',arr[1]);
    num1.innerText = arr.length
});
buttonLeft.addEventListener('click',()=>{
    image.setAttribute('style',arr[0]);
    num1.innerText = arr.length-1;
});
var lastP = document.querySelector('.lastP');
const date = new Date();
let year = date.getFullYear();

lastP.innerHTML =`Copyright ® ${year} Lorem All rights Rcerved`;

var links = document.querySelectorAll('.links ul li');

// links.forEach((link)=>{
//     link.addEventListener('click',()=>{
//         link.classList.remove('active2')
//     })
// })
links[1].classList.add('active2');