document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to the server

    // Get the input values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email && password) {
        // Show success pop-up if inputs are valid
        showPopup();
    } else {
        alert("Please fill in all fields.");
    }
});

function showPopup() {
    document.getElementById("successPopup").style.display = "flex";
}

function closePopup() {
    // Hide the pop-up
    document.getElementById("successPopup").style.display = "none";

    // Redirect to the homepage after the pop-up is closed
    setTimeout(function() {
        window.location.href = "sketch.html"; // Redirect to the Sketch page after a delay
    }, 500); // Optional: Delay before redirect (500ms)
}
