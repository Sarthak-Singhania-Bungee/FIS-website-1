var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

document.getElementById("login-btn").addEventListener("click",login);
document.getElementById("register-btn").addEventListener("click",register);

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
    x.style.left="50px";
    y.style.left="400px";
    z.style.left="0px";
}