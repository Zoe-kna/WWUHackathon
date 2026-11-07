document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    window.user = document.getElementById('username1');
    const pass = document.getElementById('password');

    const storedUser = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPass = localStorage.getItem('password');
    window.loggedIn = [window.user, false];

    let loginSuccess = 0;

    if(!storedUser && !storedEmail){
        loginSuccess = -1;
    } else if ((user === storedUser || user === storedEmail) && pass === storedPass){
        loginSuccess = 1;
    }

    if(loginSuccess === 1){
        window.loggedIn[1] == true;
        window.location.href = "../Homepage/index.html"
    }else if(loginSuccess === -1){
        alert("Account not found, create a new one");
    }else{
        alert("Password or Username incorrect");
    }
});

function showSignUp(){
    var w = document.getElementById("sl");
    var x = document.getElementById("hidingNewUser");
    var y = document.getElementById("user-input");
    var z = document.getElementById("nu");

    w.style.display = "block"
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

}

function showLogin(){
    var w = document.getElementById("sl");
    var x = document.getElementById("hidingNewUser");
    var y = document.getElementById("user-input");
    var z = document.getElementById("nu");

    w.style.display = "none"
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "block";
}

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.clear();

    
    window.firstName = document.getElementById('first').value;
    window.lastName = document.getElementById('last').value;
    const user = document.getElementById('user2').value;
    const pass = document.getElementById('password2').value;
    const email = document.getElementById('email').value;
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkedBoxes).map(checkbox => checkbox.value);

    localStorage.setItem('username', user);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('pass', pass);
    localStorage.setItem('email', email);
    localStorage.setItem('interests', values);

    window.location.href = "../Homepage/index.html";
});

/*document.getElementById('')
    localStorage.setItem('username', user);
    localStorage.setItem('password', pass);*/