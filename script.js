// Membuat elemen cursor custom
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Menggerakkan cursor mengikuti mouse
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Efek klik pada cursor
document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
});
document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        confirmationMessage.classList.remove("hidden");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const messageConfirmation = document.getElementById("messageConfirmation");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        messageConfirmation.classList.remove("hidden");
        contactForm.reset();
    });
});
