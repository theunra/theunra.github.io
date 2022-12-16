import { Route } from "./route.js"
import { projectPage } from "./components.js"

function getPageID()
{
    const page_id = window.location.href
    const split = page_id.split('#')
    return split[1]
}

function createProjectPage()
{
    let project_id = getPageID()
    let idx = -1;
    for(let i = 0; i<projectPage.length;i++)
    {
        if(projectPage[i].id==project_id)
        {
            idx=i
            break
        }
    }

    if(idx==-1) idx=0

    const loc = document.getElementById("desc-location")
    const type = document.getElementById("desc-type")
    const build = document.getElementById("desc-build")
    const lvl = document.getElementById("desc-level")
    loc.innerText = projectPage[idx].project_fact.location
    type.innerText = projectPage[idx].project_fact.type
    build.innerText = projectPage[idx].project_fact.building_area
    lvl.innerText = projectPage[idx].project_fact.levels

    const project_slide = document.getElementById("project-slide")

    for(let i = 0;i<projectPage[idx].slide_img.length;i++)
    {
        const list = document.createElement("li")
        list.className="splide__slide"
        
        const list_data = document.createElement("img")
        list_data.className="project-desc-img project-desc-img--lwide"
        list_data.src="../public/" + projectPage[idx].slide_img[i]

        list.appendChild(list_data)
        project_slide.appendChild(list)
    }
}

function windowResized()
{
    const screen_ratio = window.innerWidth/window.innerHeight
    const navbar = document.getElementById("navbar")
    const navbar_btn = document.getElementsByClassName("navbar-btn")
    const main_container = document.getElementById("main-container")
    const project_desc = document.getElementById("project-desc")
    const project_desc_text = document.getElementsByClassName("project-desc-text")
    const project_desc_img_box = document.getElementById("project-desc-img-box")
    const project_desc_header = document.getElementsByClassName("project-desc-header")
    const project_desc_img = document.getElementsByClassName("project-desc-img")
    const cc_form_text = document.getElementsByClassName("contact-form-text")
    const cc_form_text_area = document.getElementsByClassName("contact-form-text-area")
    const cc_form_button = document.getElementsByClassName("contact-form-button")
    const cc_info_box = document.getElementsByClassName("contact-info-box")
    const cc_form = document.getElementsByClassName("contact-form")
    const cc = document.getElementById("contact-container")

    if(screen_ratio < 0.6) 
    {
        navbar.classList.replace(navbar.classList[2], "navbar--pwide")
        navbar.classList.replace(navbar.classList[1], "navbar--mobile")
        main_container.classList.replace(main_container.classList[0], "content-container--mobile")
        project_desc.classList.replace(project_desc.classList[0], "col-1")
        project_desc.classList.replace(project_desc.classList[1], "none")
        project_desc_img_box.classList.replace(project_desc_img_box.classList[0], "project-desc-img-box--mobile")
        
        for(let i = 0; i<navbar_btn.length;i++)
        if(!navbar_btn[i].classList.contains("navbar-btn--mobile"))
        {
            navbar_btn[i].classList.add("navbar-btn--mobile")
            navbar_btn[i].classList.add("disable")
        }

        for(let i = 0; i<project_desc_text.length;i++)
        if(!project_desc_text[i].classList.contains("project-desc-text--mobile"))
        {
            project_desc_text[i].classList.add("project-desc-text--mobile")
        }

        for(let i = 0; i<project_desc_header.length;i++)
        if(!project_desc_header[i].classList.contains("project-desc-header--mobile"))
        {
            project_desc_header[i].classList.add("project-desc-header--mobile")
        }

        for(let i = 0; i<project_desc_img.length;i++)
        project_desc_img[i].classList.replace(project_desc_img[i].classList[1], "project-desc-img--mobile")

        cc.classList.replace(cc.classList[0], "content-container--mobile")

        for(let i = 0; i<cc_form_text.length;i++)
        if(!cc_form_text[i].classList.contains("contact-form-text--mobile")) cc_form_text[i].classList.add("contact-form-text--mobile")

        for(let i = 0; i<cc_form_text_area.length;i++)
        if(!cc_form_text_area[i].classList.contains("contact-form-text-area--mobile")) cc_form_text_area[i].classList.add("contact-form-text-area--mobile")

        for(let i = 0; i<cc_form_button.length;i++)
        if(!cc_form_button[i].classList.contains("contact-form-button--mobile")) cc_form_button[i].classList.add("contact-form-button--mobile")

        for(let i = 0; i<cc_form.length;i++)
        if(!cc_form[i].classList.contains("contact-form--mobile")) cc_form[i].classList.add("contact-form--mobile")

        for(let i = 0; i<cc_info_box.length;i++)
        if(!cc_info_box[i].classList.contains("contact-info-box--mobile")) cc_info_box[i].classList.add("contact-info-box--mobile")

    }
    else if(screen_ratio < 0.8) 
    {
        navbar.classList.replace(navbar.classList[2], "navbar--psquare")
        navbar.classList.replace(navbar.classList[1], "navbar--mobile")
        main_container.classList.replace(main_container.classList[0], "content-container--mobile")
        project_desc.classList.replace(project_desc.classList[0], "col-1")
        project_desc.classList.replace(project_desc.classList[1], "none")
        project_desc_img_box.classList.replace(project_desc_img_box.classList[0], "project-desc-img-box--mobile")

        for(let i = 0; i<navbar_btn.length;i++)
        if(!navbar_btn[i].classList.contains("navbar-btn--mobile"))
        {
            navbar_btn[i].classList.add("navbar-btn--mobile")
            navbar_btn[i].classList.add("disable")
        }

        for(let i = 0; i<project_desc_text.length;i++)
        if(!project_desc_text[i].classList.contains("project-desc-text--mobile"))
        {
            project_desc_text[i].classList.add("project-desc-text--mobile")
        }

        for(let i = 0; i<project_desc_header.length;i++)
        if(!project_desc_header[i].classList.contains("project-desc-header--mobile"))
        {
            project_desc_header[i].classList.add("project-desc-header--mobile")
        }

        for(let i = 0; i<project_desc_img.length;i++)
        project_desc_img[i].classList.replace(project_desc_img[i].classList[1], "project-desc-img--mobile")

        cc.classList.replace(cc.classList[0], "content-container--mobile")

        for(let i = 0; i<cc_form_text.length;i++)
        if(!cc_form_text[i].classList.contains("contact-form-text--mobile")) cc_form_text[i].classList.add("contact-form-text--mobile")

        for(let i = 0; i<cc_form_text_area.length;i++)
        if(!cc_form_text_area[i].classList.contains("contact-form-text-area--mobile")) cc_form_text_area[i].classList.add("contact-form-text-area--mobile")

        for(let i = 0; i<cc_form_button.length;i++)
        if(!cc_form_button[i].classList.contains("contact-form-button--mobile")) cc_form_button[i].classList.add("contact-form-button--mobile")

        for(let i = 0; i<cc_form.length;i++)
        if(!cc_form[i].classList.contains("contact-form--mobile")) cc_form[i].classList.add("contact-form--mobile")

        for(let i = 0; i<cc_info_box.length;i++)
        if(!cc_info_box[i].classList.contains("contact-info-box--mobile")) cc_info_box[i].classList.add("contact-info-box--mobile")

    }
    else if(screen_ratio < 1.4)
    {
        navbar.classList.replace(navbar.classList[2], "navbar--lsquare")
        navbar.classList.replace(navbar.classList[1], "navbar")
        main_container.classList.replace(main_container.classList[0], "content-container")
        project_desc.classList.replace(project_desc.classList[0], "col-6")
        project_desc.classList.replace(project_desc.classList[1], "height-100-h")
        project_desc_img_box.classList.replace(project_desc_img_box.classList[0], "project-desc-img-box--lsquare")

        for(let i = 0; i<navbar_btn.length;i++)
        if(navbar_btn[i].classList.contains("navbar-btn--mobile"))
        {
            navbar_btn[i].classList.remove("navbar-btn--mobile")
            navbar_btn[i].classList.remove("disable")
        }

        for(let i = 0; i<project_desc_text.length;i++)
        if(project_desc_text[i].classList.contains("project-desc-text--mobile"))
        {
            project_desc_text[i].classList.remove("project-desc-text--mobile")
        }

        for(let i = 0; i<project_desc_header.length;i++)
        if(project_desc_header[i].classList.contains("project-desc-header--mobile"))
        {
            project_desc_header[i].classList.remove("project-desc-header--mobile")
        }

        if(!project_desc.classList.contains("py-10"))
        project_desc.classList.add("py-10")

        for(let i = 0; i<project_desc_img.length;i++)
        project_desc_img[i].classList.replace(project_desc_img[i].classList[1], "project-desc-img--lsquare")

        cc.classList.replace(cc.classList[0], "content-container")
        
        for(let i = 0; i<cc_form_text.length;i++)
        if(cc_form_text[i].classList.contains("contact-form-text--mobile")) cc_form_text[i].classList.remove("contact-form-text--mobile")

        for(let i = 0; i<cc_form_text_area.length;i++)
        if(cc_form_text_area[i].classList.contains("contact-form-text-area--mobile")) cc_form_text_area[i].classList.remove("contact-form-text-area--mobile")

        for(let i = 0; i<cc_form_button.length;i++)
        if(cc_form_button[i].classList.contains("contact-form-button--mobile")) cc_form_button[i].classList.remove("contact-form-button--mobile")

        for(let i = 0; i<cc_form.length;i++)
        if(cc_form[i].classList.contains("contact-form--mobile")) cc_form[i].classList.remove("contact-form--mobile")

        for(let i = 0; i<cc_info_box.length;i++)
        if(cc_info_box[i].classList.contains("contact-info-box--mobile")) cc_info_box[i].classList.remove("contact-info-box--mobile")
    }
    else if(screen_ratio < 1.8)
    {
        navbar.classList.replace(navbar.classList[2], "navbar--lwide")
        navbar.classList.replace(navbar.classList[1], "navbar")
        main_container.classList.replace(main_container.classList[0], "content-container")
        project_desc.classList.replace(project_desc.classList[0], "col-6")
        project_desc.classList.replace(project_desc.classList[1], "height-100-h")
        project_desc_img_box.classList.replace(project_desc_img_box.classList[0], "project-desc-img-box--lwide")

        for(let i = 0; i<navbar_btn.length;i++)
        if(navbar_btn[i].classList.contains("navbar-btn--mobile"))
        {
            navbar_btn[i].classList.remove("navbar-btn--mobile")
            navbar_btn[i].classList.remove("disable")
        }

        for(let i = 0; i<project_desc_text.length;i++)
        if(project_desc_text[i].classList.contains("project-desc-text--mobile"))
        {
            project_desc_text[i].classList.remove("project-desc-text--mobile")
        }

        for(let i = 0; i<project_desc_header.length;i++)
        if(project_desc_header[i].classList.contains("project-desc-header--mobile"))
        {
            project_desc_header[i].classList.remove("project-desc-header--mobile")
        }

        if(project_desc.classList.contains("py-10"))
        project_desc.classList.remove("py-10")

        for(let i = 0; i<project_desc_img.length;i++)
        project_desc_img[i].classList.replace(project_desc_img[i].classList[1], "project-desc-img--lwide")

        cc.classList.replace(cc.classList[0], "content-container")

        for(let i = 0; i<cc_form_text.length;i++)
        if(cc_form_text[i].classList.contains("contact-form-text--mobile")) cc_form_text[i].classList.remove("contact-form-text--mobile")

        for(let i = 0; i<cc_form_text_area.length;i++)
        if(cc_form_text_area[i].classList.contains("contact-form-text-area--mobile")) cc_form_text_area[i].classList.remove("contact-form-text-area--mobile")

        for(let i = 0; i<cc_form_button.length;i++)
        if(cc_form_button[i].classList.contains("contact-form-button--mobile")) cc_form_button[i].classList.remove("contact-form-button--mobile")

        for(let i = 0; i<cc_form.length;i++)
        if(cc_form[i].classList.contains("contact-form--mobile")) cc_form[i].classList.remove("contact-form--mobile")

        for(let i = 0; i<cc_info_box.length;i++)
        if(cc_info_box[i].classList.contains("contact-info-box--mobile")) cc_info_box[i].classList.remove("contact-info-box--mobile")
    }
    else{
        navbar.classList.replace(navbar.classList[2], "navbar--lwide")
        navbar.classList.replace(navbar.classList[1], "navbar")
        main_container.classList.replace(main_container.classList[0], "content-container")
        project_desc.classList.replace(project_desc.classList[0], "col-6")
        project_desc.classList.replace(project_desc.classList[1], "height-100-h")
        project_desc_img_box.classList.replace(project_desc_img_box.classList[0], "project-desc-img-box--lwide")

        for(let i = 0; i<navbar_btn.length;i++)
        if(navbar_btn[i].classList.contains("navbar-btn--mobile"))
        {
            navbar_btn[i].classList.remove("navbar-btn--mobile")
            navbar_btn[i].classList.remove("disable")
        }

        for(let i = 0; i<project_desc_text.length;i++)
        if(project_desc_text[i].classList.contains("project-desc-text--mobile"))
        {
            project_desc_text[i].classList.remove("project-desc-text--mobile")
        }

        for(let i = 0; i<project_desc_header.length;i++)
        if(project_desc_header[i].classList.contains("project-desc-header--mobile"))
        {
            project_desc_header[i].classList.remove("project-desc-header--mobile")
        }

        if(project_desc.classList.contains("py-10"))
        project_desc.classList.remove("py-10")

        for(let i = 0; i<project_desc_img.length;i++)
        project_desc_img[i].classList.replace(project_desc_img[i].classList[1], "project-desc-img--lwide")

        cc.classList.replace(cc.classList[0], "content-container")

        for(let i = 0; i<cc_form_text.length;i++)
        if(cc_form_text[i].classList.contains("contact-form-text--mobile")) cc_form_text[i].classList.remove("contact-form-text--mobile")

        for(let i = 0; i<cc_form_text_area.length;i++)
        if(cc_form_text_area[i].classList.contains("contact-form-text-area--mobile")) cc_form_text_area[i].classList.remove("contact-form-text-area--mobile")

        for(let i = 0; i<cc_form_button.length;i++)
        if(cc_form_button[i].classList.contains("contact-form-button--mobile")) cc_form_button[i].classList.remove("contact-form-button--mobile")

        for(let i = 0; i<cc_form.length;i++)
        if(cc_form[i].classList.contains("contact-form--mobile")) cc_form[i].classList.remove("contact-form--mobile")

        for(let i = 0; i<cc_info_box.length;i++)
        if(cc_info_box[i].classList.contains("contact-info-box--mobile")) cc_info_box[i].classList.remove("contact-info-box--mobile")
    }
}

createProjectPage()
window.addEventListener('resize', windowResized)
windowResized()

const top_carousel = new Splide( '#project-desc-img',{
    type : 'loop',
    speed : 1000,
    perPage : 1,
    perMove : 1,
    width : '100%'
} ).mount();

const home_b = document.getElementById("home-b")
home_b.addEventListener("click", Route)
home_b.route = "home"
home_b.addr = "../"
home_b.tag = " "

const about_b = document.getElementById("about-b")
about_b.addEventListener("click", Route)
about_b.route = "about"
about_b.addr = "../pages/"
about_b.tag = " "

const project_b = document.getElementById("project-b")
project_b.addEventListener("click", Route)
project_b.route = "project"
project_b.addr = "../pages/"
project_b.tag = " "

const submit_b = document.getElementById("submit-form")
const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ZxugX-q1jLQCqdBLbaiE00vniSir7j0__OSwD1KpNmfbDuMy6PremDRlzk9v1XknUg/exec'
const form = document.forms['submit-to-google-sheet']

submit_b.addEventListener('click', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => submitSuccess(response))
    .catch(error => submitFailed(error))
})

function submitSuccess(response)
{
    const contact_form = document.getElementById("contact-form")
    const notice = document.getElementById("form-submission-notice")
    contact_form.hidden = true
    notice.hidden = false
}

function submitFailed(error)
{
    console.log('Error!')
}