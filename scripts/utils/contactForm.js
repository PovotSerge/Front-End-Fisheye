function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";

    const containeur = document.querySelector('.containeur');

    containeur.style.display = "none";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";

    const containeur = document.querySelector('.containeur');

    containeur.style.display = "block";
}