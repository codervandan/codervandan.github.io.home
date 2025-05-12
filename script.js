// Age Verification Logic
function handleAgeVerification(isOfAge) {
    if (isOfAge) {
        document.getElementById('age-verification-overlay').style.display = 'none';
        sessionStorage.setItem('ageVerified', 'true');
    } else {
        window.location.href = 'https://www.google.com';
    }
}

// Check for saved verification
window.onload = function() {
    if (!sessionStorage.getItem('ageVerified')) {
        document.getElementById('age-verification-overlay').style.display = 'flex';
    } else {
        document.getElementById('age-verification-overlay').style.display = 'none';
    }
};
