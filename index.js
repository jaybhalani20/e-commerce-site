const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

bar.addEventListener('click', () => {
    navbar.classList.add('active');
})

close.addEventListener('click', () => {
    navbar.classList.remove('active')
})



var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function () {
        MainImg.src = smallImg[i].src
    }

}

