// Load saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "Light Mode";
    }
});

function showGreeting() {
    const timeInput = document.getElementById("timeInput").value;
    const hour = parseInt(timeInput);
    const outputDiv = document.getElementById("greetingOutput");

    outputDiv.textContent = "";

    if (hour >= 5 && hour < 12) {
        outputDiv.textContent = "Good Morning!";
        outputDiv.style.color = "#e67e22";
    } else if (hour >= 12 && hour < 18) {
        outputDiv.textContent = "Good Afternoon!";
        outputDiv.style.color = "#f1c40f";
    } else if (hour >= 18 && hour <= 23 || hour < 5) {
        outputDiv.textContent = "Good Night!";
        outputDiv.style.color = "#2c3e50";
    } else {
        outputDiv.textContent = "Invalid hour! Please enter a number between 0 and 23.";
        outputDiv.style.color = "#e74c3c";
    }

    document.getElementById("timeInput").value = "";
}

function toggleTheme() {
    const body = document.body;
    const toggleButton = document.getElementById("themeToggle");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
}