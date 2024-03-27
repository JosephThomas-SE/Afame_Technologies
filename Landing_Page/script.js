const typedText = document.getElementById('typed-text');
const welcomeMessage = ""; // Empty string, as message is already in HTML

let isTyping = false; // Flag to track animation state

function typeWriter() {
  const text = typedText.textContent; // Get current displayed text
  if (text.length < welcomeMessage.length && !isTyping) {
    typedText.textContent += welcomeMessage.charAt(text.length);
    setTimeout(typeWriter, 50);
  } else {
    isTyping = true; // Set flag to prevent further calls
  }
}

// Call the typewriter function only once on page load
window.onload = typeWriter;
