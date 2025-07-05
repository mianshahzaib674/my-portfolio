const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

    // ✅ Save selected color in localStorage
    localStorage.setItem("color", color);
}

/* ======= theme light and dark mode ======= */
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    // ✅ Load saved or default theme color
    let activeColor = localStorage.getItem("color") || "red";
    setActiveStyle(activeColor); // Apply theme

    // 🌙 Dark mode icon setup
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});