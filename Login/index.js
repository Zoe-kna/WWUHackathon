function getUsers(){
    try{
        return JSON.parse(localStorage.getItem("users")) || [];
    } catch (e) {
        return [];
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = document.getElementById('username1');
    const pass = document.getElementById('password');

    const users = getUsers();
    
    if(users.length === 0) {
        alert("No users found. Please sign up first.");
        return;
    }

    const matchingUser = users.find(u => (u.username === user.value || u.email === user.value) && u.password === pass.value);

    if(matchingUser) {
        sessionStorage.setItem('loggedInUser', JSON.stringify({username: match.username, firstName: match.firstName}));
        window.location.href = "../Homepage/index.html";
    } else {
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

    const form = event.target;
    const firstName = document.getElementById('first').value.trim();
    const lastName = document.getElementById('last').value.trim();
    const user = document.getElementById('user2').value.trim();
    const pass = document.getElementById('password2').value.trim();
    const email = document.getElementById('email').value.trim();
    const checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkedBoxes).map(checkbox => checkbox.value);


    const users = getUsers();
    if(users.some(u => u.username === user || u.email === email)) {
        alert("Username or email already exists. Please choose a different one.");
        return;
    }

    users.push({ firstName, lastName, username: user, password: pass, email: email, values: values });
    localStorage.setItem("users", JSON.stringify(users));

    sessionStorage.setItem('loggedInUser', JSON.stringify({username: user, firstName: firstName}));
    window.location.href = "../Homepage/index.html";
});

/*document.getElementById('')
    localStorage.setItem('username', user);
    localStorage.setItem('password', pass);*/