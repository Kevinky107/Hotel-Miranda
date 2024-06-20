const logo = document.getElementById("logo")
const menu = document.getElementById("open")
const dropdown = document.getElementById("dropdown")
const to_booking = document.getElementsByClassName("booking")

console.log(to_booking)

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

for(let i = 0; i < to_booking.length; i++)
    to_booking[i].addEventListener("click", function(){
        window.location.href = "./room-details.html"
    })