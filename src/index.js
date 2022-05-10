import './less/index.less'

// Your code goes here!
const logo = document.querySelector(".logo-heading");
const welcomeImg = document.querySelector(".intro img");
const navLinks = document.querySelectorAll(".nav-link");
const mainImg = document.querySelectorAll(".img-content img");
const footerBtns = document.querySelectorAll(".btn");

navLinks.forEach(link => link.addEventListener("click", function(e){
    alert(`The ${e.target.outerText} link is broken`)
}))

logo.addEventListener("mouseenter", function(){
    logo.style.transform = 'rotate(180deg)';
})
logo.addEventListener("mouseout", function(){
    logo.style.transform = 'rotate(0)';
})
welcomeImg.addEventListener("click", function(){
    if (welcomeImg.style.filter === "blur(4px)") {
        welcomeImg.style.filter = "none"
    } else {
        welcomeImg.style.filter = "blur(4px)";
    }
})
mainImg.forEach(img => img.addEventListener("click", e => e.target.style.filter === "grayscale()"? e.target.style.filter = "none": e.target.style.filter = "grayscale()"));

footerBtns.forEach(btn => btn.addEventListener('click', function(e){
    btn.style.color = "black";
}))

document.addEventListener('wheel', function(e){
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "red"
    } else if (document.body.style.backgroundColor === "red"){
        document.body.style.backgroundColor = "white"
    } else {
        document.body.style.backgroundColor = "blue"
    }
})

document.addEventListener("keydown", function(){
    document.body.style.backgroundColor = "black"; 
    document.body.style.color = "white";
})
document.addEventListener("keyup", function(){
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
})


