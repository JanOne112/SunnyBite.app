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
