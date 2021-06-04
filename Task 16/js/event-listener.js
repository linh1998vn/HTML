function checkUsername() {
    var elMSg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMSg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);