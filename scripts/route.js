/**
 * @brief Go to next route/page
 * @param {event} evt 
 */
 export function Route(evt)
 {
     const route = evt.currentTarget.route
     const addr = evt.currentTarget.addr
     const tag = evt.currentTarget.tag
     let route_addr = ""
     
     if(route=="home") 
         route_addr = addr + "index.html" + tag
     else
         route_addr = addr + `${route}.html` + tag
 
     if(route_addr!="") 
         window.location.href = route_addr
 }