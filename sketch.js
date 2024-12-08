// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Variables for canvas drawing
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas?.getContext("2d");
    const colorPicker = document.getElementById("colorPicker");
    const brushSize = document.getElementById("brushSize");
    const generateButton = document.getElementById("generateButton");
    const aiMessage = document.getElementById("aiMessage");
    const textPrompt = document.getElementById("textPrompt");

    // Canvas setup
    if (canvas && ctx) {
        canvas.width = window.innerWidth * 0.8;
        canvas.height = window.innerHeight * 0.6;

        let isDrawing = false;
        let x = 0, y = 0;

        canvas.addEventListener("mousedown", (e) => {
            isDrawing = true;
            x = e.offsetX;
            y = e.offsetY;
        });

        canvas.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                draw(ctx, x, y, e.offsetX, e.offsetY);
                x = e.offsetX;
                y = e.offsetY;
            }
        });

        canvas.addEventListener("mouseup", () => {
            isDrawing = false;
            ctx.beginPath(); // Stop the drawing path
        });

        function draw(ctx, x1, y1, x2, y2) {
            ctx.strokeStyle = colorPicker.value || "#000000";
            ctx.lineWidth = brushSize.value || 5;
            ctx.lineCap = "round";

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.closePath();
        }
    }

    // Generate button functionality
    if (generateButton) {
        generateButton.addEventListener("click", () => {
            if (textPrompt.value.trim() !== "") {
                aiMessage.classList.remove("hidden");
                setTimeout(() => {
                    alert(`AI has analyzed: "${textPrompt.value}"`);
                    aiMessage.classList.add("hidden");
                }, 2000); // Simulate AI processing
            } else {
                alert("Please enter a text prompt!");
            }
        });
    }
});
