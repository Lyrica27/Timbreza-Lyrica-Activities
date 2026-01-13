function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if((username == "Lyrica" && password == "12345")) {
        error.innerHTML = "Login Successful";
        error.style.color = 'red';
    error.style.backgroundColor = 'yellow';
    error.style.visibility = 'visible';

    }
else {
     error.innerHTML = "Wrong Login";
        error.style.color = 'black';
        error.style.backgroundColor = 'red';
        error.style.visibility = 'visible';
}
}