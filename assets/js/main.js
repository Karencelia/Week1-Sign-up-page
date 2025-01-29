document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form submission if validation fails

        let isValid = true; // track form validity
        let errorMessages = [];

        // Get form elements
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const dob = document.getElementById("dob");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");
        const termsCheckbox = document.getElementById("terms");

        // Helper function to show error messages
        function showError(input, message) {
            input.style.border = "1px solid red";
            errorMessages.push(message);
        }

        function removeError(input) {
            input.style.border = "1px solid #ccc";
        }

        // First Name Validation
        if (firstName.value.trim() === "") {
            showError(firstName, "First name is required.");
            isValid = false;
        } else {
            removeError(firstName);
        }

        // Last Name Validation
        if (lastName.value.trim() === "") {
            showError(lastName, "Last name is required.");
            isValid = false;
        } else {
            removeError(lastName);
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            showError(email, "Email or phone number is required.");
            isValid = false;
        } else if (!emailPattern.test(email.value)) {
            showError(email, "Enter a valid email address.");
            isValid = false;
        } else {
            removeError(email);
        }

        // DOB Validation
        if (dob.value.trim() === "") {
            showError(dob, "Date of Birth is required.");
            isValid = false;
        } else {
            removeError(dob);
        }

        // Password Validation
        if (password.value.trim() === "") {
            showError(password, "Password is required.");
            isValid = false;
        } else if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters.");
            isValid = false;
        } else {
            removeError(password);
        }

        // Confirm Password Validation
        if (confirmPassword.value.trim() === "") {
            showError(confirmPassword, "Confirm Password is required.");
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            showError(confirmPassword, "Passwords do not match.");
            isValid = false;
        } else {
            removeError(confirmPassword);
        }

        // Terms Validation
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, "You must agree to the Terms & Privacy Policy.");
            isValid = false;
        }

        // Error messages
        if (!isValid) {
            alert(errorMessages.join("\n"));
        } else {
            alert("Form submitted successfully! ✅");
            form.submit(); // Submit the form if all validations pass
        }
    });
});