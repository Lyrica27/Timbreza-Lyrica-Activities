function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const conpassword = document.getElementById('conpassword').value;
    const fname = document.getElementById('fname').value;

    const error = document.getElementById('error');
    if((username == "") || (password == "") || (conpassword == "") || (fname == "")) {
        error.innerHTML = "fill All";
        error.style.color = 'red';
        error.style.backgroundColor = 'coral red';
        error.style.visibility = 'visible';
    }
    
    else if(password != conpassword) {
        error.innerHTML = "Password Mismatch";
        error.style.color = 'red';
        error.style.backgroundColor = 'coral red';
        error.style.visibility = 'visible';
    }
else {
    error.innerHTML = "Login successful";
    error.style.color = 'red';
    error.style.backgroundColor = 'yellow';
    error.style.visibility = 'visible';
    
}
    }