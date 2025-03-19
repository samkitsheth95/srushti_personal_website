console.log("Welcome to Samkit's personal website dedicated to Srushti!");

document.addEventListener("DOMContentLoaded", function() {
    const button = document.createElement("button");
    button.textContent = "Change Background Color";
    document.body.appendChild(button);

    button.addEventListener("click", function() {
        document.body.style.backgroundColor = "#FFD700";
    });
});
