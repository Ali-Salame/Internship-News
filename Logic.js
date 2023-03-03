setInterval(() => {
    let distance2 = window.pageYOffset;
    if (distance2 == 0){
        nav.classList.remove("navbar")
        nav.classList.add("navbartop")
    }
    else if (distance2 > 0){
        nav.classList.add("navbar")
        nav.classList.remove("navbartop")
    }
}, 700); 



// Sandwich Logic
let Sandwich = document.getElementById("sandwich")
let overlay = document.getElementById('Overlay')
let active = 0


let top_sand = document.getElementById('close-l')
let mid_sand = document.getElementById('close-m')
let right_sand = document.getElementById('close-r')

Sandwich.onclick = deployOverlay

function deployOverlay(){
    if (active === 0){
        active = 1
        overlay.classList.add('nav_overlay')
        overlay.classList.remove('nav_overlayc')

        top_sand.classList.add('close-l')
        mid_sand.classList.add('close-m')
        right_sand.classList.add('close-r')

        top_sand.classList.remove('close-lc')
        mid_sand.classList.remove('close-mc')
        right_sand.classList.remove('close-rc')
    }
    else {
        // overlay.style.display = "none"
        overlay.classList.add('nav_overlayc')
        overlay.classList.remove('nav_overlay')

        top_sand.classList.remove('close-l')
        mid_sand.classList.remove('close-m')
        right_sand.classList.remove('close-r')

        top_sand.classList.add('close-lc')
        mid_sand.classList.add('close-mc')
        right_sand.classList.add('close-rc')

        active = 0
    }
}