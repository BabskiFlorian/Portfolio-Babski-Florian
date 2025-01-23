const hamburgerButton = document.querySelector(".nav-toggler")
const navigation = document.querySelector("nav")
const switchThemeBtn = document.querySelector('.changeTheme')
let toggleTheme = 0;

switchThemeBtn.addEventListener('click', () => {

  if(toggleTheme === 0){

    document.documentElement.style.setProperty('--ecriture', '#2c2c2c');
    document.documentElement.style.setProperty('--background', '#f1f1f1');
    toggleTheme++;
  } else {
    document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
    document.documentElement.style.setProperty('--background', '#2c2c2c');
    toggleTheme--;
  }

}
)

hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
}

