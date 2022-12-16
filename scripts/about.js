import {Route} from "./route.js"
import { profileImage } from "./components.js"
import {handleResize, DynamicStyle} from "./resize.js"
import { Navbar } from "./navbar.js"

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
    new DynamicStyle("profile-box"),
    new DynamicStyle("profile-img"),
]

function insertProfileImage()
{
    const profile_box = document.getElementById("profile-box")
    for(let i = 0;i<profileImage.length;i++)
    {
        let profile_img = document.createElement("img")
        profile_img.className = "profile-img profile-img--lwide"
        profile_img.src = `../public/${profileImage[i].desktop}`
        profile_box.appendChild(profile_img)
    }
}

/**
 * Setup home button routes and events
 */
function navbarButton(id, route, addr, tag)
{
    const navbar_b = document.getElementById(id)
    navbar_b.addEventListener("click", Route)
    navbar_b.route = route
    navbar_b.addr = addr
    navbar_b.tag = tag
}

/*
 * Catchphrase Screen
 */
let catch_idx = 0
const catchphrase = ["intuisi", "kolaborasi", "solusi"]

function skipCatchphrase()
{
    catch_idx = 3;
    window.removeEventListener("click", skipCatchphrase)
}

function changeCatchprase()
{
    if(catch_idx == 3)
    {
        const overlay = document.getElementById("overlay")
        overlay.style.animationName = "overlay-in"
        overlay.style.animationDuration = "1.0s"
        overlay.style.opacity = "0.0"
        setTimeout(()=>{
            overlay.style.zIndex = "-1"
            setTimeout(()=>
            {
                overlay.remove()
            }, 3000)
        }, 1000)
        return
    }
    
    const cap = document.getElementById("catchphrase")
    cap.innerText = catchphrase[catch_idx]
    catch_idx++
}

function initNavbarButton()
{
    navbarButton("home-b", "home", "../", " ")
    navbarButton("about-b", "about", "./", " ")
    navbarButton("project-b", "project", "./", " ")
}

function resizeEvent()
{
    Navbar()
    handleResize(dynamic_styles)
    initNavbarButton()
}

/*
 * Events after DOM loaded
 */
document.addEventListener("DOMContentLoaded", ()=>{
    for(let i = 0; i<4; i++)
    setTimeout(changeCatchprase, i * 1400)

    window.addEventListener("click", skipCatchphrase)

    insertProfileImage()
    resizeEvent()
    window.addEventListener("resize", resizeEvent)

})