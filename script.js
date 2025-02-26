function showGreeting() {
    // Get the input value
    const timeInput = document.getElementById("timeInput").value;
    const hour = parseInt(timeInput); // Convert to integer
    const outputDiv = document.getElementById("greetingOutput");

    // Clear previous output
    outputDiv.textContent = "";

    // Check the time and set the greeting
    if (hour >= 0 && hour < 12) {
        outputDiv.textContent = "Good Morning!";
        outputDiv.style.color = "#e67e22"; // Orange for morning
    } else if (hour >= 12 && hour < 18) {
        outputDiv.textContent = "Good Afternoon!";
        outputDiv.style.color = "#f1c40f"; // Yellow for afternoon
    } else if (hour >= 18 && hour <= 23 || hour < 5) {
        outputDiv.textContent = "Good Night!";
        outputDiv.style.color = "#2c3e50"; // Dark blue for night
    } else {
        outputDiv.textContent = "Invalid hour! Please enter a number between 0 and 23.";
        outputDiv.style.color = "#e74c3c"; // Red for error
    }

    // Clear the input field
    document.getElementById("timeInput").value = "";
}