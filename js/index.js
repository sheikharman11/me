const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0)
})
console.log("worikng")

let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".nav-list")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navList.classList.toggle("actives")
}
window.onscroll = () => {
    menu.classList.remove("bx-x")
    navList.classList.remove("actives")
}



const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.hero-text',{delay:250, origin:'left'})
sr.reveal('.hero-img',{delay:250, origin:'right'})

sr.reveal('.sub-service,.about-text,.about-img,.portfolio-content,.services,.service-content,.contact',{delay:150, origin:'bottom'})

