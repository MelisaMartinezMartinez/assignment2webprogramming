document.getElementById('registrationForm').addEventListener('submit', function(e) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    let errorMessage = '';

    if (username.length < 3) {
        errorMessage += 'Username must be at least 3 characters long.\n';
    }

    if (!email.includes('@')) {
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (password.length < 6) {
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    if (password !== confirmPassword) {
        errorMessage += 'Passwords do not match.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
        e.preventDefault();
    }
});
