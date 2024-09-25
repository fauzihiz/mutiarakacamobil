function toggleFaq(element) {
    // Find the answer div next to the clicked question
    const answer = element.nextElementSibling;
    
    // Toggle the answer visibility
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      element.classList.add('active'); // Add active class to change question color
    } else {
      answer.style.display = "none";
      element.classList.remove('active'); // Remove active class to revert question color
    }
  }

function toggleFlip(element) {
    element.classList.toggle("flipped");
  }
    