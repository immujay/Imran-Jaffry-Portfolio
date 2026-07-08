// =========================
// Smooth Scroll (backup)
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});


// =========================
// Navbar Background
// =========================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,0.85)";
        navbar.style.padding = "18px 8%";
        navbar.style.transition = ".3s";

    }

    else {

        navbar.style.background = "rgba(0,0,0,0.45)";
        navbar.style.padding = "25px 8%";

    }

});


// =========================
// Scroll Reveal Animation
// =========================

const revealElements = document.querySelectorAll(

".project, .about, .contact, .stat"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:0.15

}

);


revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform="translateY(60px)";

element.style.transition="all .8s ease";

observer.observe(element);

});


// =========================
// Image Hover Tilt
// =========================

document.querySelectorAll(

".poster-item, .logo-item, .app-item"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = (x - rect.width/2)/25;
const rotateX = -(y - rect.height/2)/25;

card.style.transform =
`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.03)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});


// =========================
// Hero Button Glow
// =========================

const button = document.querySelector(".btn");

button.addEventListener("mouseenter",()=>{

button.style.boxShadow="0 0 40px rgba(255,255,255,.35)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow="";

});