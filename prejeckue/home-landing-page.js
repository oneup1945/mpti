// home-landing-page.js

$(document).ready(function() {
    // Event listener for the login button
    $('#loginButton').on('click', function() {
        // Get the input values
        var username = $('#usernameInput').val();
        var password = $('#passwordInput').val();

        // Simple validation (you can add more complex validation as needed)
        if (username === '' || password === '') {
            alert('Username and Password cannot be empty!');
        } else {
            window.location.href = 'index.html';
        }
   
   
    });

   
    $('.belum-punya-akun').on('click', function() {
        window.location.href = 'home-landing-page1.html'; // Ganti dengan URL tujuan
    });
});
