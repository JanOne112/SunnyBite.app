document.addEventListener("DOMContentLoaded", () => {
    // Animasi hero section
    const heroText = document.querySelector(".hero-content");
    if (heroText) {
        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(50px)";

        setTimeout(() => {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
            heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        }, 500);
    }

    // Validasi Form Reservasi
    const reservationForm = document.getElementById("reservationForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const guests = document.getElementById("guests").value;

            if (name && email && date && time && guests) {
                confirmationMessage.classList.remove("hidden");
                confirmationMessage.textContent = `Reservasi atas nama ${name} pada ${date} pukul ${time} untuk ${guests} orang telah dikonfirmasi!`;
                reservationForm.reset();
            } else {
                alert("Harap isi semua kolom formulir dengan benar.");
            }
        });
    }
});
