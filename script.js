function showModal(modalPage) {
    document.getElementById(modalPage).classList.add('visible');
}

function closeModal() {
    document.querySelectorAll(".modal").forEach(element => {
        element.classList.remove('visible');
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello world");

    document.getElementsByClassName("about")[0].addEventListener("click", () => {
        showModal("aboutModal");
    }); 


    document.querySelectorAll('.modal-close-button').forEach(element => {
        element.addEventListener("click", () => {
            closeModal();
        });
    });
});