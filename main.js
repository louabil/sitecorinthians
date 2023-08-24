import './style.css'
import './style2.css'
const o = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("#data-close-modal")
const modal = document.querySelector("[data-modal]")

o.addEventListener("click", () => {
    modal.showModal()
    
})

closeButton.addEventListener("click", () =>{
    modal.close()
    
})
