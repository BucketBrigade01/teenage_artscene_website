const dialogContainer = document.querySelector(".burger-popup");
const openBtn = document.querySelector(".burger-button"); 
const closeBtn = document.querySelector(".close-button");
const linkButtons = document.querySelectorAll(".close-button-link");

openBtn.addEventListener('click', () => {
    dialogContainer.showModal(); 
});

closeBtn.addEventListener('click', () => {
    dialogContainer.close(); 
});

linkButtons.forEach(button => {
    button.addEventListener("click", () => {
        dialogContainer.close();
    });
});