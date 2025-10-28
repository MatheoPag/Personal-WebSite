async function copyLink(link) {
    try {
        await navigator.clipboard.writeText(link);
        console.log("Lien copié dans le presse-papiers : " + link);
        alert("Lien copié dans le presse-papiers !");
    } catch (err) {
        console.error("Erreur lors de la copie : ", err);
        alert("Impossible de copier le lien. Veuillez essayer manuellement.");
    }
}