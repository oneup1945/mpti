// home-landing-page1.js
$(document).ready(function() {
    // Event listener for the login button
    $('#sign-in1').on('click', function() {
        // Get the input values
        var username1 = $('#usernameInput').val();
        var email     = $('#emailInput').val();
        var password1 = $('#passwordInput').val();
        var confirmPassword = $('#confpassInput').val();

        // Simple validation (you can add more complex validation as needed)
        if (username1 === ''|| email === ''|| password1 === ''|| confirmPassword === '') {
            alert('Username, email,Password, confirm passford cannot be empty!');
        } else {
            window.location.href = 'home-landing-page.html';
        }
   
   
    });

   
    $('.sudah-punya-akun').on('click', function() {
        window.location.href = 'home-landing-page.html'; // Ganti dengan URL tujuan
    });
});
