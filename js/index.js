var gallery = document.querySelector('.allGames')

for(var i = 0 ; i < 4 ; i++){
    let div = `
    <div class="card" style="width: 15rem;">
    <img class="card-img-top" src="images/Rectangle 2${i+3}.png" alt="Card image cap">
    <div class="card-body">
        <p class="card-text text-center" data-goal="40"><i class="fa-solid fa-fire-flame-curved mx-1"></i> 40 Followers</p>
    </div>
</div>
    `
    gallery.innerHTML += div;
}


var bars = document.querySelector('.bars')
var ul = document.querySelector('.nav .links ul')
bars.addEventListener('click',()=>{
    ul.classList.toggle('active2')
})
var lastP = document.querySelector('.lastP');
const date = new Date();
let year = date.getFullYear();

lastP.innerHTML =`Copyright ® ${year} Lorem All rights Rcerved`;