const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

showSlide(currentSlide);

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Change slide every 3 seconds (adjust as needed)

// alert code
function confirmSubmission() {
    var form = document.getElementById("registrationForm");
    var inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    var isFormValid = true;
    
    inputs.forEach(function(input) {
        if (!input.value) {
            isFormValid = false;
            return;
        }
    });

    if (isFormValid) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            // form.submit();
            window.location.href = "thankyou.html";

        }
    } else {
        alert("Please fill in all required fields.");
    }
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    confirmSubmission(); // Call custom submission confirmation function
});


  