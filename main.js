const menuOverlay = document.getElementById("menuOverlay");
const menuDisplay = document.getElementById("menuDisplay");
const btnOpenMenu = document.getElementById("openMenu");
const btnCloseMenu = document.getElementById("closeMenu");
const linkScroll = document.getElementById("linkScroll");

// При нажатии на первую кнопку
btnOpenMenu.onclick = () => {
  menuOverlay.classList.remove("is-hidden");
  menuDisplay.classList.add("is-open");
};

// При нажатии на вторую кнопку
btnCloseMenu.onclick = () => {
  menuDisplay.classList.remove("is-open");
  menuOverlay.classList.add("is-hidden");
};
