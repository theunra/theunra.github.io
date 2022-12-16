/**
 * List of image data for company profile slides in "about" page.
 * 
 * Structure :
 *  @ id, identifier for image.
 *  @ desktop, image file with extension.
 */
export const profileImage = [
    {
        id : "inklusi",
        desktop : "8A1.jpg",
    },
    {
        id : "kolab",
        desktop : "8A2.jpg",
    },
    {
        id : "solusi",
        desktop : "8A3.jpg",
    },
    {
        id : "team",
        desktop : "9Alt.jpg",
    },
]

/**
 * List of image data for project carousel in "project" page.
 * 
 * Structure :
 *  @ top, mid, bot - position of image, top, middle or bottom shelf.
 *  @ id, identifier for image and routing address for project page.
 *  @ img, image file with extension.
 */
export const projectDisplay = {
    top : 
    [
        {id : "A1", img : "xA1.png"},
        {id : "A2", img : "xA2.png"},
        {id : "A3", img : "xA3.png"},
        {id : "A4", img : "xA4.png"},
        {id : "D1", img : "xD1.png"},
        {id : "D2", img : "xD2.png"},
        {id : "D3", img : "xD3.png"},
        {id : "D4", img : "xD4.png"}
    ],
    mid : 
    [
        {id : "B1", img : "xB1.png"},
        {id : "B2", img : "xB2.png"},
        {id : "B3", img : "xB3.png"},
        {id : "B4", img : "xB4.png"},
        {id : "E1", img : "xE1.png"},
        {id : "E2", img : "xE2.png"},
    ],
    bot : 
    [
        {id : "F1", img : "xF1.png"},
        {id : "F2", img : "xF2.png"},
        {id : "C1", img : "xC1.png"},
        {id : "C2", img : "xC2.png"},
        {id : "C3", img : "xC3.png"},
        {id : "C4", img : "xC4.png"},
    ]
}

/**
 * List of project data corresponding to items in "project" page.
 * 
 * Structure :
 *  @ id, identifier for project id, corresponding to project carousel id.
 *  @ slide_img, image file for image carousel.
 *  @ project_fact, list of project data.
 */
export const projectPage = [
    {
        id : "INVALID",
        slide_img : [
            "invalid.jpg",
        ],
        project_fact :
        {
            location : "INVALID",
            type : "INVALID",
            building_area : "INVALID",
            levels : "INVALID"
        }
    },
    {
        id : "A1",
        slide_img : [
            "NAY1.jpg",
            "NAY2.jpg"
        ],
        project_fact :
        {
            location : "South Jakarta",
            type : "Residence",
            building_area : "",
            levels : ""
        }
    },
    {
        id : "A2",
        slide_img : [
            "NAY3.jpg",
            "NAY4.jpg"
        ],
        project_fact :
        {
            location : "West Jakarta",
            type : "Residence",
            building_area : "",
            levels : ""
        }
    }
]