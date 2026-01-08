function login() {
    const username = document.getElementById('username').value;
    const Password = document.getElementById('Password').value;
    const conpassword = document.getElementById('conpassword').value;
    const fname = document.getElementById('fname').value;

    if((username == "") || (Password == "") || (conpassword == "") || (fname == "")) {
        alert("Fill this Out");
    }
    
    else if(Password != conpassword) {
        alert("Password Mismatch");
    }
else {
    alert("Login Success");
}
    }