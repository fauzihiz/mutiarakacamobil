            document.addEventListener("DOMContentLoaded", () => {
              const observerOptions = {
                root: null, // Use the viewport as the container
                threshold: 0.1 // Trigger when 10% of the element is visible
              };
          
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    const element = entry.target;
          
                    if (element.classList.contains('hero-content')) {
                      // Animate children of hero section one by one
                      const children = element.children;
                      Array.from(children).forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.5}s`; // Delay for each child
                        child.classList.add('fade-in');
                      });
                    } else if (element.classList.contains('benefit-content')) {
                      // Animate h2 in benefit section
                      element.querySelector('h2').classList.add('fade-in');
          
                      // Animate flip boxes sliding in from left
                      const flipBoxes = element.querySelectorAll('.flip-box');
                      flipBoxes.forEach((box, index) => {
                        box.style.animationDelay = `${index * 0.5}s`; // Delay for each box
                        box.classList.add('slide-in-left');
                      });
                    } else if (element.classList.contains('faq')) {
                      // Animate h2 in FAQ section
                      element.querySelector('h2').classList.add('fade-in');
          
                      // Animate FAQ items sliding in from bottom
                      const faqItems = element.querySelectorAll('.faq-item');
                      faqItems.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.5}s`; // Delay for each item
                        item.classList.add('slide-in-bottom');
                      });
                    } else if (element.classList.contains('gallery')) {
                      // Animate h1 in gallery section
                      element.querySelector('h1').classList.add('fade-in');
          
                      // Animate gallery items fading in
                      const galleryItems = element.querySelectorAll('.gallery-item');
                      galleryItems.forEach((item, index) => {
                        item.style.animationDelay = `${index * 0.5}s`; // Delay for each item
                        item.classList.add('fade-in');
                      });
                    } else if (element.classList.contains('location')) {
                      // Fade in location section
                      element.classList.add('fade-in');
                    } else if (element.classList.contains('last-cta')) {
                      // Bounce in last CTA section
                      element.classList.add('bounce-in');
                    }
          
                    // Stop observing the element after animation
                    observer.unobserve(element);
                  }
                });
              }, observerOptions);
          
              // Target elements for observation
              const sections = document.querySelectorAll('.hero-content, .benefit-content, .faq, .gallery, .location, .last-cta');
              sections.forEach(section => {
                observer.observe(section);
              });
            });

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