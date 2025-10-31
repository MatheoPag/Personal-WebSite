const panel = document.getElementById("panel")
const open_btn = document.getElementById("menu_btn")
const footer = document.querySelector("footer");

fetch("/footer.html")
    .then(response => response.text())
    .then(data => { footer.innerHTML = data; })


// fetch("form.html")
//     .then(response => response.text())
//     .then(data => { footer.innerHTML = data; })

function tooglePanel(){
    panel.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (panel.classList.contains("active") 
      && !panel.contains(e.target) 
      && !open_btn.contains(e.target)) {
    panel.classList.remove("active");
  }
});