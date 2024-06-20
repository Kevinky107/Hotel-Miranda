const logo = document.getElementById("logo")
const menu = document.getElementById("open")
const dropdown = document.getElementById("dropdown")


logo.addEventListener("click", function(){
    window.location.href = "./index.html"
})

menu.addEventListener("click", function(){
    if(dropdown.className == "nav-links") {
        dropdown.className = "nav-links--hide"
        menu.src = "./public/menu.svg"
    } else {
        dropdown.className = "nav-links"
        menu.src = "./public/cross.svg"
    }
})