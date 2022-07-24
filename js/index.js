var inputs = document.querySelectorAll('.tt');
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



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})
});




var arr = ['background-image: url("images/Rectangle 6.png");','background-image: url("images/Rectangle 25 (1).png");']
var buttonLeft = document.querySelector('.js2');
var buttonRight = document.querySelector('.js3');
// var image = document.querySelector('.image');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

var image = document.querySelector('.ss');
buttonRight.addEventListener('click',()=>{
    image.setAttribute('style',arr[1]);
    num1.innerText = arr.length
});
buttonLeft.addEventListener('click',()=>{
    image.setAttribute('style',arr[0]);
    num1.innerText = arr.length-1;
});







