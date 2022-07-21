var bars = document.querySelector('.bars')
var ul = document.querySelector('.nav .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2');
})
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
links[3].classList.add('active2');