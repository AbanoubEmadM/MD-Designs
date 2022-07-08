let barsIcon = document.querySelector(".fa-bars");
let navItems = document.querySelector(".nav-items");
let logo = document.querySelector(".logo");
let closeNav = document.querySelector(".fa-xmark");

barsIcon.addEventListener("click",()=>{
    navItems.classList.add("active");
    logo.classList.add("hidden");
    barsIcon.classList.add("hidden")
})
closeNav.addEventListener("click",()=>{
    navItems.classList.remove("active");
    logo.classList.remove("hidden");
    barsIcon.classList.remove("hidden")
})
$(".servicesLi").click(function(){
    $(".servul").slideToggle()
})