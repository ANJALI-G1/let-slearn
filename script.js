document.addEventListener('DOMContentLoaded', () => {

    // Get the Login and Sign Up buttons from the original HTML
    const loginButton = document.querySelector('.nav_panel2 button:nth-child(1)');
    const signUpButton = document.querySelector('.nav_panel2 button:nth-child(2)');

    // Handle Login Button Click
    loginButton.addEventListener('click', () => {
        // You can replace this with actual login functionality like opening a modal or redirecting to a login page
        alert('Login button clicked! Implement the login functionality here.');
    });

    // Handle Sign Up Button Click
    signUpButton.addEventListener('click', () => {
        // You can replace this with actual sign-up functionality like opening a modal or redirecting to a sign-up page
        alert('Sign Up button clicked! Implement the sign-up functionality here.');
    });

});
