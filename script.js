const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

/// Function to update the visitor count
function updateVisitorCount() {
    var visitorCountElement = document.getElementById('visitorCount');
    var currentCount = parseInt(visitorCountElement.innerText.split(':')[1].trim());
    visitorCountElement.innerText = 'Visitors: ' + (currentCount + 1);
  }
  
  // Update visitor count every second
  setInterval(updateVisitorCount, 1000);

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Add event listener to pause the slider on hover
  swiper.on('mouseover', function () {
    swiper.autoplay.stop();
  });
  
  // Add event listener to resume the slider on mouseout
  swiper.on('mouseout', function () {
    swiper.autoplay.start();
  });

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();

    // Validate name
    if (name === "") {
        nameInput.classList.add("error");
        nameInput.nextElementSibling.textContent = "Please enter your name.";
        return false;
    } else {
        nameInput.classList.remove("error");
        nameInput.nextElementSibling.textContent = "";
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.classList.add("error");
        emailInput.nextElementSibling.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailInput.classList.remove("error");
        emailInput.nextElementSibling.textContent = "";
    }

    // Validate message
    if (message === "") {
        messageInput.classList.add("error");
        messageInput.nextElementSibling.textContent = "Please enter a message.";
        return false;
    } else {
        messageInput.classList.remove("error");
        messageInput.nextElementSibling.textContent = "";
    }

    
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    var anchorLinks = document.querySelectorAll('.nav-link');

    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var targetOffset = targetElement.offsetTop;
            var headerHeight = document.querySelector('.header').offsetHeight;
            var scrollToOffset = targetOffset - headerHeight;

            window.scrollTo({
                top: scrollToOffset,
                behavior: 'smooth'
            });
        }
    }
});
// Add hover effect to the logo
var logo = document.querySelector('.logo');
logo.addEventListener('mouseover', function() {
    // Add your hover effect code here
    // For example, change the logo's opacity or apply a CSS class
});

logo.addEventListener('mouseout', function() {
    // Remove the hover effect code here (if applicable)
});

// Implement click event for the visitor count
var visitorCount = document.getElementById('visitorCount');
visitorCount.addEventListener('click', function() {
    // Add your click event code here
    // For example, show a pop-up with more information about the visitor count
});
// Create an observer for the Contact section
var contactSection = document.getElementById('contact');
var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            contactSection.style.opacity = '1'; // Fade-in the section when it comes into view
            observer.unobserve(entry.target); // Stop observing once the section is visible
        }
    });
}, { threshold: 0.1 });

// Start observing the Contact section
observer.observe(contactSection);


