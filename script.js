document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.getElementById("message-textarea");
  // Function to resize the textarea based on its scrollHeight
  function adjustTextarea() {
    textarea.style.height = "auto"; // Reset the height to auto first
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
  }


  textarea.addEventListener("input", adjustTextarea);

  // Initial adjustment in case the page loads with some content already entered
  adjustTextarea();
});
let isInputFocused = false;
const scrollSpeed = 50; // Pixels to scroll per key press
const scrollThrottleInterval = 40; // Milliseconds to wait between scrolls
let lastScrollTime = 0;

// Function to handle smooth scrolling
function smoothScroll(container, direction) {
  const currentTime = new Date().getTime();
  if (
    currentTime - lastScrollTime > scrollThrottleInterval &&
    !isInputFocused
  ) {
    container.scrollTo({
      top: container.scrollTop + direction * scrollSpeed,
      behavior: "smooth",
    });
    lastScrollTime = currentTime;
  }
}

// Listen for keydown events
document.addEventListener("keydown", function (e) {
  const container = document.querySelector("#message-container");
  if (!container) return;

  switch (e.key) {
    case "ArrowUp":
      smoothScroll(container, -1);
      break;
    case "ArrowDown":
      smoothScroll(container, 1);
      break;
    default:
      // Do nothing for other keys
      break;
  }
});

// Check if an input field is focused
document.addEventListener("focusin", function (e) {
  isInputFocused =
    e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA";
});

document.addEventListener("focusout", function () {
  isInputFocused = false;
});
