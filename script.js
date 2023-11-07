

document.getElementById("password").addEventListener("input", function () {
    checkPasswordStrength(this.value);
});

function checkPasswordStrength(password) {
    var strengthLine = document.getElementById("strength-line");
    var strengthText = document.getElementById("strength");

    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    var weakRegex = new RegExp("^(?=.{6,}).*", "g");

    if (strongRegex.test(password)) {
        strengthLine.style.width = "100%";
        strengthLine.style.backgroundColor = "green";
        strengthText.textContent = "Strong";
        strengthText.className = "password-strength strong";
    } else if (mediumRegex.test(password)) {
        strengthLine.style.width = "50%";
        strengthLine.style.backgroundColor = "orange";
        strengthText.textContent = "Medium";
        strengthText.className = "strength-text medium";
    } else if (weakRegex.test(password)) {
        strengthLine.style.width = "33.33%";
        strengthLine.style.backgroundColor = "red";
        strengthText.textContent = "Weak";
        strengthText.className = "password-strength weak";
    } else {
        strengthLine.style.width = "0";
        strengthText.textContent = "";
    }
}


  

  document.getElementById("password").addEventListener("input", updatePasswordStrength);
  

  document.getElementById("password").addEventListener("input", updatePasswordStrength);
  
    document.addEventListener("DOMContentLoaded", function () {
        const registrationForm = document.querySelector("form");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");
        const passwordError = document.getElementById("passwordError");

        registrationForm.addEventListener("submit", function (event) {
            if (passwordInput.value !== confirmPasswordInput.value) {
                passwordError.textContent = "Passwords do not match. Please check again.";
                event.preventDefault(); 
            } else {
                passwordError.textContent = "";
            }
        });

        confirmPasswordInput.addEventListener("input", function () {
            passwordError.textContent = "";
        });
    });

    // Function to check email format using regular expression
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    if (fullName === "") {
        document.getElementById("fullNameError").style.display = "block";
    } else {
        document.getElementById("fullNameError").style.display = "none";
    }

    if (username === "") {
        document.getElementById("usernameError").style.display = "block";
    } else {
        document.getElementById("usernameError").style.display = "none";
    }

    if (email === "") {
        document.getElementById("emailError").style.display = "block";
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (phoneNumber === "") {
        document.getElementById("phoneNumberError").style.display = "block";
    } else {
        document.getElementById("phoneNumberError").style.display = "none";
    }

}


function openSuccessPage() {
    const fullNameInput = document.getElementById("fullName").value;
    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const phoneNumberInput = document.getElementById("phoneNumber").value;
    const passwordInput = document.getElementById("password").value;
    const confirmPasswordInput = document.getElementById("confirmPassword").value;
    const genderInputs = document.querySelectorAll('input[name="gender"]:checked');
    const passwordError = document.getElementById("passwordError");

    if (
        fullNameInput === "" ||
        usernameInput === "" ||
        emailInput === "" ||
        phoneNumberInput === "" ||
        passwordInput === "" ||
        confirmPasswordInput === "" ||
        genderInputs.length === 0 ||
        !isValidEmail(emailInput)
    ) {
        passwordError.textContent = "Please fill out the remaining fields";
    } else if (passwordInput !== confirmPasswordInput) {
       
        showPasswordMismatchModal();
    } else {
        passwordError.textContent = ""; 
        closePasswordMismatchModal(); // Close the modal if it was shown
        window.location.href = "success.html"; 
    }
}


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    

function showPasswordMismatchModal() {
    var modal = document.getElementById("passwordMismatchModal");
    modal.style.display = "block";
  }
  
  function closePasswordMismatchModal() {
    var modal = document.getElementById("passwordMismatchModal");
    modal.style.display = "none";
  }
  document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");
  
    registrationForm.addEventListener("submit", function (event) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = "Passwords do not match. Please check again.";
        showPasswordMismatchModal(); // Show the pop-up modal
        event.preventDefault(); // Prevent the form from submitting
      } else {
        passwordError.textContent = ""; // Clear the error message
      }
    });
    confirmPasswordInput.addEventListener("input", function () {
      passwordError.textContent = "";
    });
  });
  
2









