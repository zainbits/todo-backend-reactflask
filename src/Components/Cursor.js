import { useEffect } from "react"
import "../stylesheets/Cursor.css"

export const Cursor = () => {

    useEffect(() => {
        const cursor = document.getElementById("c-cursor")
        document.addEventListener("mousemove", e => {
            cursor.setAttribute("style", "top: " + (e.pageY - 5) + "px; left: " + (e.pageX - 5) + "px;") 
        })
        document.addEventListener("mouseleave", function(event){

            if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
            {
                cursor.setAttribute("style", "display: none;")          
            }
          });
    })

    return <div id="c-cursor"></div>
}