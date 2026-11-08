const logIn = document.getElementById("logIn");

let current = null;
try{
    current = JSON.parse(sessionStorage.getItem('loggedInUser'));
}
catch(e){
    current = null;
}

if(current){
    logIn.innerHTML = current.username;
}
