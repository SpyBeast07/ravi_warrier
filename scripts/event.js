// Event Filtering Logic
const buttons = document.querySelectorAll(".filter-btn");
const events = document.querySelectorAll(".event-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    events.forEach(card => {
        if (filter === "all") {
        card.style.display = "block";
        } else if (card.classList.contains(filter)) {
        card.style.display = "block";
        } else {
        card.style.display = "none";
        }
    });

    // highlight the active button
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    });
});