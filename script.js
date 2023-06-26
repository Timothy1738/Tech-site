const clickBtn = document.querySelector("#menu-btn");
const sideMenu = document.querySelector(".nav-links");

//show links
clickBtn.addEventListener('click', () => {
    sideMenu.classList.toggle("active");
})
