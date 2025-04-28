const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
const switchThemeBtn = document.querySelector('.changeTheme');

// Récupérer l'état du thème depuis localStorage ou définir une valeur par défaut
let toggleTheme = localStorage.getItem('toggleTheme') === '1' ? 1 : 0;

// Appliquer le thème initial en fonction de la valeur stockée
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

// Appliquer le theme au chargement de la page
applyTheme();

switchThemeBtn.addEventListener('click', () => {
    if (toggleTheme === 0) {
        toggleTheme = 1;
    } else {
        toggleTheme = 0;
    }

    // Stocker l'état du thème dans localStorage
    localStorage.setItem('toggleTheme', toggleTheme.toString());

    applyTheme(); // Appliquer le thème après le changement
});

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    // Enregistrer l'état de la navigation dans localStorage
    localStorage.setItem('navActive', navigation.classList.contains('active') ? 'true' : 'false');
}

// Récupérer l'état de la navigation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    navigation.classList.add('loading'); // Ajouter la classe 'loading' pour désactiver la transition

    const isNavActive = localStorage.getItem('navActive');
    if (isNavActive === 'true') {
        navigation.classList.add('active');
        hamburgerButton.classList.add('active');
    } else {
        navigation.classList.remove('active');
        hamburgerButton.classList.remove('active');
    }

    // Forcer un reflow (layout) pour que la classe 'loading' soit prise en compte
    void navigation.offsetWidth;

    navigation.classList.remove('loading'); // Supprimer la classe 'loading' après le chargement
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


const element = document.getElementById('elementARotate');
let isRotatingLeft = false;

function rotate() {
    if (isRotatingLeft) {
        element.classList.remove('rotate-left');
        element.classList.add('rotate-right');
    } else {
        element.classList.remove('rotate-right');
        element.classList.add('rotate-left');
    }
    isRotatingLeft = !isRotatingLeft;
}

// Démarrer l'animation (par exemple, toutes les 4 secondes)
setInterval(rotate, 1000);

//annimation header mot

const motElement = document.getElementById('annimationheader'); // Supposons que votre mot ait cet ID
const mot = motElement.textContent;
motElement.textContent = ''; // Effacer le contenu initial

for (let i = 0; i < mot.length; i++) {
    const span = document.createElement('span');
    span.textContent = mot[i];
    span.style.animationDelay = i * 0.1 + 's'; // Calculer le délai dynamiquement
    motElement.appendChild(span);
}

//LocalStorage Header (Correction du commentaire, il s'agit du Nav)