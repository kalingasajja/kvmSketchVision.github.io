document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to the server

    // Get the input values
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email && phone && password) {
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
    window.location.href = "index.html"; // Replace with your homepage URL
}
