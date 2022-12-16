import {Route} from "./route.js"
import { projectDisplay } from "./components.js"
import { handleResize, DynamicStyle } from "./resize.js"
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
            lsquare :"--destkop",
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
    new DynamicStyle("bg-page-project"),
    new DynamicStyle("bg-gray"),
    new DynamicStyle("project-display-box"),
    new DynamicStyle("project-display-img"),
    new DynamicStyle("top-display-prev-button"),
    new DynamicStyle("top-display-next-button"),
    new DynamicStyle("project-display-button-text"),
]

function createProjectDisplay()
{    
    const slides_top = document.getElementById("slides-top")

    for(let i = 0;i<projectDisplay.top.length;i++)
    {
        const list = document.createElement("li")
        list.className="splide__slide"
        
        const list_data = document.createElement("img")
        list_data.className="project-display-img  project-display-img--lwide"
        list_data.src="../public/" + projectDisplay.top[i].img
        list_data.route = "projectpage"
        list_data.addr = " "
        list_data.tag = "#" + projectDisplay.top[i].id
        
        list_data.addEventListener("click", Route)

        list.appendChild(list_data)
        slides_top.appendChild(list)
    }

    const slides_mid = document.getElementById("slides-mid")
    for(let i = 0;i<projectDisplay.mid.length;i++)
    {
        const list = document.createElement("li")
        list.className="splide__slide"
        
        const list_data = document.createElement("img")
        list_data.className="project-display-img  project-display-img--lwide"
        list_data.src="../public/" + projectDisplay.mid[i].img
        list_data.route = "projectpage"
        list_data.addr = " "
        list_data.tag = "#" + projectDisplay.mid[i].id
        
        list_data.addEventListener("click", Route)

        list.appendChild(list_data)
        slides_mid.appendChild(list)
    }

    const slides_bot = document.getElementById("slides-bot")
    for(let i = 0;i<projectDisplay.bot.length;i++)
    {
        const list = document.createElement("li")
        list.className="splide__slide"
        
        const list_data = document.createElement("img")
        list_data.className="project-display-img  project-display-img--lwide"
        list_data.src="../public/" + projectDisplay.bot[i].img
        list_data.route = "projectpage"
        list_data.addr = " "
        list_data.tag = "#" + projectDisplay.bot[i].id
        
        list_data.addEventListener("click", Route)

        list.appendChild(list_data)
        slides_bot.appendChild(list)
    }
}

function createSplideCarousel()
{   
    const top_carousel = new Splide( '#top-display',{
        speed : 1000,
        perPage : 4,
        perMove : 1,
        width : '100%'
    } ).mount();
    
    const mid_carousel = new Splide( '#mid-display',{
        speed : 1000,
        perPage : 3,
        perMove : 1,
        width : '100%',
    } ).mount();
    
    const bot_carousel = new Splide( '#bot-display',{
        speed : 1000,
        perPage : 2,
        perMove : 1,
        width : '100%'
    } ).mount();

    return {
        top : top_carousel,
        mid : mid_carousel,
        bot : bot_carousel
    }
}

/*
 * Handle GSheet form submission 
 */

function configForm(){
    const submit_b = document.getElementById("submit-form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ZxugX-q1jLQCqdBLbaiE00vniSir7j0__OSwD1KpNmfbDuMy6PremDRlzk9v1XknUg/exec'
    const form = document.forms['submit-to-google-sheet']

    submit_b.addEventListener('click', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => submitSuccess(response))
        .catch(error => submitFailed(error))
    })
}

function submitSuccess(response)
{
    const contact_form = document.getElementById("contact-form")
    const notice = document.getElementById("form-submission-notice")
    contact_form.hidden = true
    notice.hidden = false
}

function submitFailed(error)
{
    const failed_notice = document.getElementById("form-failed-notice")
    failed_notice.hidden = false
    setTimeout(()=>{
        failed_notice.style.animationName = "fade-out"
        failed_notice.style.opacity = "0.0"
        setTimeout(()=>{
            failed_notice.hidden = true
            failed_notice.style.animationName = "fade-in"
            failed_notice.style.opacity = "1.0"
        }, 1000)
    }, 2000)
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
    const bg = document.getElementById("bg")
    createProjectDisplay()
    createSplideCarousel()
    
    resizeEvent()
    window.addEventListener("resize", resizeEvent)

    configForm()

})