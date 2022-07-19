
var bars = document.querySelector('.bars')
var ul = document.querySelector('.nav .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2')
})


// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         loop: true,
//         margin:10,
//         nav: true,
//         responsive: {
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     })
// });
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

var lastP = document.querySelector('.lastP');
const date = new Date();
let year = date.getFullYear();

lastP.innerHTML =`Copyright ® ${year} Lorem All rights Rcerved`;