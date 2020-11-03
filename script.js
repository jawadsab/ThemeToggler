const toggleSwitch = document.getElementById("toggle-theme");
const introText = document.getElementById("intro-text");
console.log(introText)
const themeIcon = document.getElementById("theme-icon");


// Switch Theme
function switchTheme(event) {
    if(event.target.checked) {
        // dark mode
        document.documentElement.setAttribute("data-theme","dark");
        introText.style.color = "#edf2f4";
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme","dark");
    } else {
        // light mode
        document.documentElement.setAttribute("data-theme","theme");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme","light");

    }
}
// onchange toggle checkbox
toggleSwitch.addEventListener("change",switchTheme);

// check localstorage for theme
const currentTheme = localStorage.getItem("theme");
if(currentTheme) {
    document.documentElement.setAttribute("data-theme",currentTheme);
    if(currentTheme === "dark") {
        toggleSwitch.checked = true;
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.remove("fa-sun");
        
        
    } else {
        themeIcon.classList.add("fa-sun");
        themeIcon.classList.remove("fa-moon");
    }

}