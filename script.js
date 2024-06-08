document.addEventListener("DOMContentLoaded", function () {
  var textarea = document.getElementById("message-textarea");

  // Function to resize the textarea based on its scrollHeight
  function adjustTextarea() {
    textarea.style.height = "auto"; // Reset the height to auto first
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to the scrollHeight
  }

  // Listen for input events on the textarea
  textarea.addEventListener("input", adjustTextarea);

  // Initial adjustment in case the page loads with some content already entered
  adjustTextarea();
});
