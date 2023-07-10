const correctEmail = 'jwd@gmail.com';
const correctPassword = "1234";

const messageContainer = document.getElementById ("message-container");

function cekLogin() {
    const userEmail = document.getElementById ('fEmail').Value;
    const userPassword = document.getElementById ('fPassword').Value;

    if (userEmail != correctEmail || userPassword != correctPassword){
        messageContainer.innerHTML = "<p class= 'error-message'>Login Gagal, Email atau Password salah!</p>";
    } else {
        messageContainer.innerHTML = "<p class= 'success-message'>Login Berhasil. . .</p>";
    }
}