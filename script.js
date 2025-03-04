window.onload = function() {
    // Créer un conteneur pour les feux d'artifice qui reste en arrière-plan
    let fireworksContainer = document.createElement('div');
    fireworksContainer.id = 'fireworks-container';
    fireworksContainer.style.position = 'fixed';
    fireworksContainer.style.top = '0';
    fireworksContainer.style.left = '0';
    fireworksContainer.style.width = '100%';
    fireworksContainer.style.height = '100%';
    fireworksContainer.style.zIndex = '-1'; // Placer derrière tout le contenu du site
    fireworksContainer.style.pointerEvents = 'none'; // Empêcher l'interaction avec le conteneur
    document.body.appendChild(fireworksContainer);

    // Fonction pour générer des feux d'artifice
    function createFireworks() {
        for (let i = 0; i < 10; i++) {
            let firework = document.createElement('div');
            firework.classList.add('firework');

            // Position aléatoire pour chaque explosion de feu d'artifice
            firework.style.position = 'absolute';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            firework.style.left = Math.random() * window.innerWidth + 'px';

            // Générer une couleur aléatoire pour chaque feu d'artifice
            let color = 'rgb(' + Math.floor(Math.random() * 256) + ',' +
                         Math.floor(Math.random() * 256) + ',' +
                         Math.floor(Math.random() * 256) + ')';
            firework.style.backgroundColor = color;
            firework.style.width = '20px'; // Taille du feu d'artifice
            firework.style.height = '20px'; // Taille du feu d'artifice
            firework.style.borderRadius = '50%'; // Forme ronde
            firework.style.animation = 'explode 3s ease-out'; // Animation pour l'explosion

            // Ajout de l'élément à l'écran
            fireworksContainer.appendChild(firework);

            // Supprimer l'élément après 3 secondes (pour dissipation)
            setTimeout(function() {
                firework.remove();
            }, 3000);
        }
    }

    // Créer des feux d'artifice immédiatement après le chargement de la page
    createFireworks();

    // Créer des feux d'artifice toutes les 4 secondes pour une animation répétitive
    setInterval(createFireworks, 4000); // Tous les 4 secondes
};

