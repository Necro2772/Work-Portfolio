"use strict";
let themeToggle = document.getElementById("theme-toggle");
addEventListener("load", () => {
    let theme = localStorage.getItem("theme");
    if (theme != null && theme === "light") {
        themeToggle.textContent = "light_mode";
        document.querySelector("html")?.setAttribute("data-theme", "light");
    }
});
themeToggle.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "dark_mode";
        document.querySelector("html")?.setAttribute("data-theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "light_mode";
        document.querySelector("html")?.setAttribute("data-theme", "light");
    }
});
//# sourceMappingURL=main.js.map