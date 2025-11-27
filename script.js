let footer = document.querySelector("footer");

fetch("footer.html")
    .then(response => response.text())
    .then(data => { footer.innerHTML = data; })

async function copyLink(link) {
    try {
        await navigator.clipboard.writeText(link);
        alert("Lien copié dans le presse-papiers !");
    } catch (err) {
        console.error("Erreur lors de la copie : ", err);
        alert("Impossible de copier le lien. Veuillez essayer manuellement.");
    }
}