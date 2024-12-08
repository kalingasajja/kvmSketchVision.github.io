document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    const generateButton = document.getElementById("generateButton");
    const textPromptInput = document.getElementById("textPrompt");
    const outputContainer = document.getElementById("outputContainer");

    // Set up canvas tools
    let isDrawing = false;
    let color = "#000000";
    let size = 5;

    canvas.addEventListener("mousedown", () => (isDrawing = true));
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, size, 0, Math.PI * 2);
        ctx.fill();
    });

    // Change color
    document.getElementById("colorPicker").addEventListener("change", (e) => {
        color = e.target.value;
    });

    // Change brush size
    document.getElementById("sizePicker").addEventListener("change", (e) => {
        size = e.target.value;
    });

    // Handle Generate Button
    generateButton.addEventListener("click", async () => {
        const textPrompt = textPromptInput.value.trim();

        if (!textPrompt) {
            alert("Please enter a text prompt!");
            return;
        }

        // Show loading animation
        outputContainer.innerHTML = "<p>Analyzing by AI...</p>";

        // Get the canvas drawing as an image
        const drawingData = canvas.toDataURL();

        // Fetch random image from Picsum (mock response)
        const response = await fetchRandomImage();

        // Display the fetched image
        if (response) {
            const img = document.createElement("img");
            img.src = response;
            img.alt = "AI Generated Image";
            img.style.maxWidth = "100%";
            img.style.border = "1px solid #ccc";
            img.style.borderRadius = "10px";
            outputContainer.innerHTML = "";
            outputContainer.appendChild(img);
        } else {
            outputContainer.innerHTML = "<p>Something went wrong. Try again!</p>";
        }
    });

    // Fetch a random image from Lorem Picsum
    async function fetchRandomImage() {
        try {
            const response = await fetch("https://picsum.photos/500/300");
            if (response.ok) {
                return response.url; // Returns the dynamic image URL
            }
        } catch (error) {
            console.error("Error fetching random image:", error);
        }
        return null;
    }
});
