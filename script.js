// Sélectionne les éléments
const button = document.getElementById("clickMe");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

// Bouton : Change de texte, couleur et joue l’animation
button.addEventListener("click", function() {
    // Change le texte et la couleur du bouton
    if (button.textContent === "Clique-moi") {
        button.textContent = "Tu as cliqué !";
        button.style.backgroundColor = "#28a745"; // Vert
    } else {
        button.textContent = "Clique-moi";
        button.style.backgroundColor = "#008CBA"; // Bleu
    }

    // Ajoute l'animation
    button.classList.add("button-clicked");

    // Retire uniquement l’animation après 0.2s
    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 200);
});

// Mode sombre : Ajoute/enlève la classe sur <body>
darkModeToggle.addEventListener("change", function() {
    body.classList.toggle("dark-mode");
});

