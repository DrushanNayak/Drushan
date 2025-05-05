function showForm(formId) {
    const home = document.querySelector('.main');
    const forms = document.querySelectorAll('.form-box');
    const dashboard = document.getElementById('admin-dashboard');
    forms.forEach(form => {
        form.style.display = 'none';
    });
    if (dashboard) dashboard.style.display ='none';

    const targetForm = document.getElementById(formId);
    if (targetForm) {
        targetForm.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login-form form");
    const loginError = loginForm.querySelector(".errorMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (email === 'admin@example.com' && password === 'admin123') {
            showAdminDashboard();
        } else if(email === 'user@example.com' && password === 'user123'){
            showForm('home');
        }
         else {
            document.querySelector('#login-form .errorMessage').textContent = "Invalid credentials.";
        }
    });

    function showAdminDashboard() {
        const forms = document.querySelectorAll('.form-box');
        forms.forEach(form => form.style.display = 'none');
    
        const dashboard = document.getElementById('admin-dashboard');
        if (dashboard) dashboard.style.display = 'block';
    }

    const signupForm = document.querySelector("#signup-form form");
    const signupError = signupForm.querySelector(".errorMessage");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("signup-username").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const repeatPassword = document.getElementById("signup-repeatPassword").value.trim();
        const role = document.getElementById("signup-role").value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!username || !email || !password || !repeatPassword || !role) {
            signupError.style.color = "red";
            signupError.textContent = "All fields are required.";
        } else if (!emailRegex.test(email)) {
            signupError.style.color = "red";
            signupError.textContent = "Enter a valid email.";
        } else if (password.length < 8) {
            signupError.style.color = "red";
            signupError.textContent = "Password must be at least 8 characters.";
        } else if (password !== repeatPassword) {
            signupError.style.color = "red";
            signupError.textContent = "Passwords do not match.";
        } else {
            signupError.style.color = "green";
            signupError.textContent = "Signup successful!";
            showForm('home');
        }
    });

    const forgotForm = document.querySelector("#forgotPassword-form form");
    const forgotError = forgotForm.querySelector(".errorMessage");

    forgotForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("forgot-email").value.trim();
        const newPassword = document.getElementById("forgot-password").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !newPassword) {
            forgotError.style.color = "red";
            forgotError.textContent = "All fields are required.";
        } else if (!emailRegex.test(email)) {
            forgotError.style.color = "red";
            forgotError.textContent = "Enter a valid email.";
        } else if (newPassword.length < 8) {
            forgotError.style.color = "red";
            forgotError.textContent = "Password must be at least 8 characters.";
        } else {
            forgotError.style.color = "green";
            forgotError.textContent = "Password reset successful!";
        }
    });
});


