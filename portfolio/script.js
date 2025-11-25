const panel = document.getElementById("panel")
const open_btn = document.getElementById("menu_btn")
const footer = document.querySelector("footer");

fetch("/footer.html")
    .then(response => response.text())
    .then(data => { footer.innerHTML = data; })


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


const sections = ['info', 'more_about_me', 'experiences', 'footer'];
let currentSectionIndex = 0;
const SCROLL_THRESHOLD = 40;
let isScrolling = false;

function isBottomOfSectionVisible(sectionId) {
  const section = document.getElementById(sectionId);
  const rect = section.getBoundingClientRect();
  return rect.bottom <= window.innerHeight;
}

function isTopOfSectionVisible(sectionId) {
  const section = document.getElementById(sectionId);
  const rect = section.getBoundingClientRect();
  return rect.top >= 0;
}

window.addEventListener('wheel', (e) => {
  e.preventDefault();

  if (isScrolling) return;
  if (Math.abs(e.deltaY) < SCROLL_THRESHOLD) return;

  const currentId = sections[currentSectionIndex];
  const currentSection = document.getElementById(currentId);

  // ===== SCROLL VERS LE BAS =====
  if (e.deltaY > 0) {
    // Si le bas n'est PAS visible -> scroll normal
    if (!isBottomOfSectionVisible(currentId)) {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
      return;
    }

    // Sinon on passe à la section suivante
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }
  }

  // ===== SCROLL VERS LE HAUT =====
  if (e.deltaY < 0) {
    // Si le haut n'est PAS visible -> scroll normal
    if (!isTopOfSectionVisible(currentId)) {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
      return;
    }

    // Sinon section précédente
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
    }
  }

  // ===== SNAP =====
  isScrolling = true;
  document.getElementById(sections[currentSectionIndex]).scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    isScrolling = false;
  }, 800);

}, { passive: false });
