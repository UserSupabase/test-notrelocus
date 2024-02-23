'use strict';
const goHome = document.getElementById('goHome');
const goLink = () => {
    window.location.href = 'index.html';
};
if (goHome) {
    goHome.addEventListener('click', goLink);
}
const goProfile = document.getElementById('profile');
const goLinkProfile = () => {
    window.location.href = 'templates/auth/login.html';
};
if (goProfile) {
    goProfile.addEventListener('click', goLinkProfile);
}
const goSignup = document.getElementById('goSignup');
const goLinkSignup = () => {
    window.location.href = 'templates/auth/signup.html';
};
if (goSignup) {
    goSignup.addEventListener('click', goLinkSignup);
}
const goNewPassword = document.getElementById('goNewPassword');
const goLinkNewPassword = () => {
    window.location.href = 'templates/auth/create-new-password.html';
};
if (goNewPassword) {
    goNewPassword.addEventListener('click', goLinkNewPassword);
}
const aboutLink = document.getElementById('about');
const goAboutLink = () => {
    window.location.href = 'templates/about/about.html';
};
if (aboutLink) {
    aboutLink.addEventListener('click', goAboutLink);
}