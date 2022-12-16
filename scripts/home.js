import {Route} from "./route.js"
import {handleResize, DynamicStyle} from "./resize.js"
import { Navbar } from "./navbar.js"

/*
 * Dynamic style properties
 */

function enableNavbarBtn()
{
    const navbar_btn =  document.getElementsByClassName("navbar-btn")
    for(let i = 0; i < navbar_btn.length; i++)
        navbar_btn[i].classList.remove("disable")
}

function disableNavbarBtn()
{
    const navbar_btn =  document.getElementsByClassName("navbar-btn")
    for(let i = 0; i < navbar_btn.length; i++)
    if(!navbar_btn[i].classList.contains("navbar-btn--mobile"))
        navbar_btn[i].classList.add("disable")
}

// function enableAnimatedBg()
// {
//     const bg = document.getElementById("bg")
//     bg.classList.add("bg-home-animate")
// }

// function disableAnimatedBg()
// {
//     const bg = document.getElementById("bg")
//     bg.classList.remove("bg-home-animate")
// }

const dynamic_styles = [
    new DynamicStyle(
        "navbar",
        {
            lwide : "--lwide",
            lsquare :"--lsquare",
            psquare : "--mobile",
            pwide : "--mobile"
        }
    ),
    new DynamicStyle(
        "navbar-btn",
        {
            lwide : "--desktop",
            lsquare :"--desktop",
            psquare : "--mobile",
            pwide : "--mobile"
        },
        true,
        {
            lwide : enableNavbarBtn,
            lsquare : enableNavbarBtn,
            psquare : disableNavbarBtn,
            pwide : disableNavbarBtn
        }
    ),
    new DynamicStyle(
        "navbar-icon",
        {
            lwide : "",
            lsquare :"",
            psquare : "--mobile",
            pwide : "--mobile"
        },
    ),
    new DynamicStyle(
        "top-logo",
        {
            lwide : "",
            lsquare :"",
            psquare : "--mobile",
            pwide : "--mobile"
        },
    ),
    // new DynamicStyle(
    //     "",
    //     undefined,
    //     true,
    //     {
    //         lwide : disableAnimatedBg,
    //         lsquare : disableAnimatedBg,
    //         psquare : enableAnimatedBg,
    //         pwide : enableAnimatedBg
    //     }
    // )
]


/*
 * Background change on hover
 */

let bg_id
let last_bg_id = "home"
let bg_state = 0

function updateBg()
{
    if(bg_id == last_bg_id) 
    {
        return
    }

    if(bg_state)
    {
        setTimeout(updateBg,400)
        return
    }
    
    const bg = document.getElementById("bg")

    if(bg_id == "home")
    {
        bg.classList.add("bg-home")   
    }
    else
    {
        bg.classList.add("bg-" + bg_id)
    }
    bg.classList.remove("bg-" + last_bg_id)

    last_bg_id = bg_id
}

function changeBg(evt)
{
    if(!evt.currentTarget.classList.contains("disable"))
    {
        bg_id = evt.currentTarget.route
        updateBg()
    }
}

function revertBg(evt)
{
    if(!evt.currentTarget.classList.contains("disable"))
    {
        bg_id = "home"
        updateBg()
    }
}

function bgChangeStart()
{
    if(!bg_state) bg_state = 1;
}

function bgChangeFinish()
{
    if(bg_state) 
    {
        setTimeout(()=>{
            bg_state = 0
        },250)
    }
}

/**
 * Setup home background events
 */
function homeBg()
{
    const bg = document.getElementById("bg")
    bg.addEventListener("transitionstart", bgChangeStart)
    bg.addEventListener("transitionend", bgChangeFinish)
}

/**
 * Setup home button routes and events
 */
function homeButton(id, route, addr, tag)
{
    const home_b = document.getElementById(id)
    home_b.addEventListener("click", Route)
    home_b.addEventListener("mouseenter", changeBg)
    home_b.addEventListener("mouseleave", revertBg)
    home_b.route = route
    home_b.addr = addr
    home_b.tag = tag
}
function initNavbarButton()
{
    homeButton("home-b", "home", "./", " ")
    homeButton("about-b", "about", "./pages/", " ")
    homeButton("project-b", "project", "./pages/", " ")
}

function resizeEvent()
{
    Navbar(true)
    handleResize(dynamic_styles)
    initNavbarButton()
}
/*
 * Events after DOM loaded
 */
document.addEventListener("DOMContentLoaded", ()=>{
    resizeEvent()
    homeBg()

    window.addEventListener("resize",resizeEvent)
})

let disabled = false