let is_open = false
let is_home = false
let is_mobile = false

export function Navbar(is_home_)
{
    const screen_ratio = window.innerWidth/window.innerHeight
    
    if(screen_ratio < 0.8)
    {
        if(!is_mobile)
            mobileNavbar()
        is_mobile = true
    }
    else{
        desktopNavbar()
        is_mobile=false
    }
    is_home = is_home_
}

function desktopNavbar()
{
    const navbar = document.getElementById("navbar")
    navbar.innerHTML = `
    <div id="navbar-btn-1" class="navbar-btn navbar-icon">
        <i class="bi bi-instagram"></i>
    </div>
    <div id="navbar-btn-2" class="navbar-btn navbar-icon">
        <i class="bi bi-linkedin"></i>
    </div>
    <div id="navbar-btn-3" class="navbar-btn navbar-icon">
        <i class="bi bi-whatsapp"></i>
    </div>
    <div id="navbar-btn-4" class="navbar-btn navbar-icon">
        <i class="bi bi-pinterest"></i>
    </div>
    <div id="home-b" class="navbar-btn rotate-90">
        .home
    </div>
    <div id="about-b" class="navbar-btn rotate-90">
        .about
    </div>
    <div id="project-b" class="navbar-btn rotate-90">
        .project
    </div>
    `
}

function mobileNavbar()
{
    const navbar = document.getElementById("navbar")
    navbar.innerHTML = `
    <div hidden id="overlay-navbar" class="overlay-navbar">
    <div id="unreveal-navbar" class="navbar-exit-btn">
        X
    </div>
    <div id="home-b" class="navbar-btn">
        home
    </div>
    <div id="project-b" class="navbar-btn">
        project
    </div>
    <div id="about-b" class="navbar-btn">
        about
    </div>
    <svg width="30vw" height="2vw" class="navbar-decor-line">
        <line x1="0vw" y1="0" x2="30vw" y2="0" style="stroke:rgb(255,255,255);stroke-width:1.5vw" />
    </svg>
    <div class="navbar-client-logo-container">
        <div class="navbar-client-logo">
            client_logo
        </div>
    </div>
    <div class="navbar-text">
        connect us on
    </div>
    <div class="content-container" style="margin-left:4vw; margin-top:8vw;">
        <div id="navbar-btn-1" class="navbar-btn navbar-icon">
            <i class="bi bi-instagram"></i>
        </div>
        <div id="navbar-btn-2" class="navbar-btn navbar-icon">
            <i class="bi bi-linkedin"></i>
        </div>
        <div id="navbar-btn-3" class="navbar-btn navbar-icon">
            <i class="bi bi-whatsapp"></i>
        </div>
        <div id="navbar-btn-4" class="navbar-btn navbar-icon">
            <i class="bi bi-pinterest"></i>
        </div>
    </div>
    <div>
        <img class="navbar-inklusi-logo" src="/public/logow.png"/>
    </div>
    <div class="navbar-inklusi-bottom-text">
        Inklusi design<br/>
        PT. Intuisi Kolaborasi Solusi<br/>
        Yogyakarta, Indonesia<br/>
        T: +62 8572557187<br/>
        info@inklusidesign.com<br/><br/>
        <span class="navbar-inklusi-copyright-text">&#169 inklusi design 2023</span><br/>
    </div>
    </div>
    <div id="reveal-navbar" class="navbar-reveal-btn">
        <svg id="reveal-navbar" class="navbar-reveal-btn" width="5vw" height="8vw">
            <line x1="0vw" y1="1vw" x2="5vw" y2="1vw" style="stroke:rgb(255,255,255);stroke-width:1.1vw" />
            <line x1="0vw" y1="3vw" x2="5vw" y2="3vw" style="stroke:rgb(255,255,255);stroke-width:1.1vw" />
            <line x1="0vw" y1="5vw" x2="5vw" y2="5vw" style="stroke:rgb(255,255,255);stroke-width:1.1vw" />
        </svg>
    </div>
    `
    const reveal_b = document.getElementById("reveal-navbar")
    const unreveal_b = document.getElementById("unreveal-navbar")
    reveal_b.addEventListener("click", revealNavbar)
    unreveal_b.addEventListener("click", revealNavbar)
}

function revealNavbar()
{
    const reveal_b = document.getElementById("reveal-navbar")
    const navbar_blur = document.getElementsByClassName("navbar-blur")
    const navbar = document.getElementById("overlay-navbar")
    const main_overlay = document.getElementById("main-overlay")

    if(navbar.hidden)
    {
        main_overlay.classList.add("navbar-background--enter")
        main_overlay.classList.remove("navbar-background--exit")
        navbar.classList.add("overlay-navbar--enter")
        navbar.classList.remove("overlay-navbar--exit")
        reveal_b.hidden = true
        main_overlay.hidden = false
        navbar.hidden = false
        is_open = true

        for(let i = 0;i<navbar_blur.length;i++)
        {
            navbar_blur[i].style.filter = "blur(2px)"
        }
        disableScroll()
    }
    else{
        main_overlay.classList.remove("navbar-background--enter")
        main_overlay.classList.add("navbar-background--exit")
        navbar.classList.remove("overlay-navbar--enter")
        navbar.classList.add("overlay-navbar--exit")
        setTimeout(()=>{
            reveal_b.hidden = false
            navbar.hidden = true
            main_overlay.hidden = true
            for(let i = 0;i<navbar_blur.length;i++)
            {
                navbar_blur[i].style.filter = "unset"
            }
            is_open = false
            enableScroll()
        }, 600)
    }
}

let touchstartY = 0
let touchendY = 0
let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
    if (touchendY - touchstartY < -100)
    {
        if(is_open)
            revealNavbar()
    }
    if (touchendX - touchstartX < -100)
    {
        if(!is_open)
            if(is_home)
                revealNavbar()
    }
}

document.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

function preventScroll(event)
{
    event.preventDefault();
    event.stopPropagation();
}
function disableScroll()
{
    document.body.addEventListener("touchmove", preventScroll, {passive:false})
}

function enableScroll()
{
    document.body.removeEventListener("touchmove", preventScroll, {passive:true})
}