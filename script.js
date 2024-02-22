function showSignUpForm() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
    document.getElementById('overlay').style.display = 'block'; // Show overlay
}

function showSignInForm() {
    document.getElementById('signInForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('overlay').style.display = 'none'; // Hide overlay
}

function clearMessages() {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = '';
}

function validateSignIn() {
    var email = document.getElementById('signInEmail').value;
    var password = document.getElementById('signInPassword').value;

    if (email.trim() === '' || password.trim() === '') {
        displayMessage('All fields are required.', true);
    } else if (!validateEmail(email)) {
        displayMessage('Invalid email format.', true);
    } else {
        // Perform SignIn logic here
        displayMessage('SignIn Successful!', false);
    }
}

function validateSignUp() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('signUpEmail').value;
    var age = document.getElementById('age').value;
    var passwordSignUp = document.getElementById('passwordSignUp').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address = document.getElementById('address').value;

    if (
        firstName.trim() === '' ||
        lastName.trim() === '' ||
        email.trim() === '' ||
        age.trim() === '' ||
        passwordSignUp.trim() === '' ||
        confirmPassword.trim() === '' ||
        phoneNumber.trim() === '' ||
        address.trim() === ''
    ) {
        displayMessage('All fields are required.', true);
    } else if (isNaN(age) || age < 1 || age > 150) {
        displayMessage('Age must be a valid number between 1 and 150.', true);
    } else if (passwordSignUp.length < 8) {
        displayMessage('Password must be at least 8 characters long.', true);
    } else if (!/\d/.test(passwordSignUp) || !/[!@#$%^&*(),.?":{}|<>]/.test(passwordSignUp)) {
        displayMessage('Password must contain at least one numeric and one special character.', true);
    } else if (passwordSignUp !== confirmPassword) {
        displayMessage('Passwords do not match.', true);
    } else if (!/^\+92[0-9]{10}$/.test(phoneNumber)) {
        displayMessage('Invalid phone number format. Use +92XXXXXXXXXXX.', true);
    } else {
        // Perform SignUp logic here
        displayMessage('SignUp Successful!', false);
    }
}

function checkPasswordStrength() {
    var passwordStrength = document.getElementById('passwordStrength');
    var password = document.getElementById('passwordSignUp').value;
    var strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[!@#$%^&*(),.?":{}|<>]+/)) {
        strength += 1;
    }

    if (strength === 0) {
        passwordStrength.className = 'weak';
        passwordStrength.innerHTML = 'Weak';
    } else if (strength === 1 || strength === 2) {
        passwordStrength.className = 'moderate';
        passwordStrength.innerHTML = 'Moderate';
    } else {
        passwordStrength.className = 'strong';
        passwordStrength.innerHTML = 'Strong';
    }
}

function displayMessage(message, isError) {
    var messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.className = isError ? 'error' : 'success';
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
