const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
const switchThemeBtn = document.querySelector('.changeTheme');

 //localstorage pour garder la couleur en fonction de l'état du bouton noir/blanc
let toggleTheme = localStorage.getItem('toggleTheme') === '1' ? 1 : 0;

// 
function applyTheme() {
    if (toggleTheme === 0) {
        document.documentElement.style.setProperty('--bgcolor', '#343434');
        document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
        document.documentElement.style.setProperty('--background', '#2c2c2c');
    } else {
        document.documentElement.style.setProperty('--bgcolor', '#f8f9fa');
        document.documentElement.style.setProperty('--ecriture', '#2c2c2c');
        document.documentElement.style.setProperty('--background', '#f1f1f1');
    }
}

applyTheme();

switchThemeBtn.addEventListener('click', () => {
    if (toggleTheme === 0) {
        toggleTheme = 1;
    } else {
        toggleTheme = 0;
    }

 //localstorage pour garder la couleur en fonction de l'état du bouton noir/blanc

    localStorage.setItem('toggleTheme', toggleTheme.toString());

    applyTheme();
});

hamburgerButton.addEventListener("click", toggleNav);

//localstorage pour garder ou non le header en fonction de la page

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    localStorage.setItem('navActive', navigation.classList.contains('active') ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', () => {
    navigation.classList.add('loading');

    const isNavActive = localStorage.getItem('navActive');
    if (isNavActive === 'true') {
        navigation.classList.add('active');
        hamburgerButton.classList.add('active');
    } else {
        navigation.classList.remove('active');
        hamburgerButton.classList.remove('active');
    }

    void navigation.offsetWidth;

    navigation.classList.remove('loading');
});

function getUserInfo() {
    fetch(`https://api.github.com/users/BabskiFlorian`)
        .then(response => response.json())
        .then(data => {
            const usernameDiv = document.getElementById('username');
            usernameDiv.textContent = data.login;
        })
}
getUserInfo();


//annimation header

const motElement = document.getElementById('annimationheader'); 
const mot = motElement.textContent;
motElement.textContent = '';

for (let i = 0; i < mot.length; i++) {
    const span = document.createElement('span');
    span.textContent = mot[i];
    span.style.animationDelay = i * 0.1 + 's';
    motElement.appendChild(span);
}

//compétences accueil

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.skills-track');
    const items = document.querySelectorAll('.skill-item');
    const itemCount = items.length;

    function setupInfiniteScroll() {
        // Clone tous les éléments de compétence
        const clones = Array.from(items).map(item => item.cloneNode(true));

        // Ajoute les clones à la fin du track
        clones.forEach(clone => track.appendChild(clone));

        // Recalcule la largeur totale du track
        const totalWidth = Array.from(track.children).reduce((acc, curr) => acc + curr.offsetWidth, 0);
        const gapWidth = parseFloat(window.getComputedStyle(track).gap) || 0;
        const totalGap = (track.children.length - 1) * gapWidth;
        track.style.width = `${totalWidth + totalGap}px`;

        // Met à jour la clé d'animation en fonction de la nouvelle largeur
        const animationDuration = 20; // Durée de base
        const durationAdjusted = animationDuration * (track.offsetWidth / 500); // Ajuste la vitesse
        const animationKeyframes = `@keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-${track.offsetWidth / 2}px); } /* Défile de la moitié pour la boucle */
        }`;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = animationKeyframes;
        document.head.appendChild(styleSheet);

        track.style.animationDuration = `${durationAdjusted}s`;
    }

    setupInfiniteScroll();
    window.addEventListener('resize', setupInfiniteScroll);
});