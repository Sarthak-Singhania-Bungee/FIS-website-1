var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("btn");

document.getElementById("login-btn").addEventListener("click",login);
document.getElementById("register-btn").addEventListener("click",register);
document.getElementById("login-submit-btn").addEventListener("click",loginSubmit);
document.getElementById("register-submit-btn").addEventListener("click",registerSubmit);

function registerSubmit(){
    let form=document.getElementById('register');
    let formData=new FormData(form);
    let uid=formData.get('user_id');
    let pass=formData.get('password');
    let email=formData.get('email');
    let data= {uid,pass,email};
    //     await fetch("localhost:5000/login", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'}, 
//   body: JSON.stringify(data)
//     }).then(res => {
//   console.log("Request complete! response:", res);
//     });
window.alert(JSON.stringify({uid,pass,email}));
}
async function loginSubmit(){
    let form=document.getElementById('login');
    let formData=new FormData(form);
    uid=formData.get('user_id');
    pass=formData.get('password');
    let data = {uid,pass};
//     await fetch("localhost:5000/login", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'}, 
//   body: JSON.stringify(data)
//     }).then(res => {
//   console.log("Request complete! response:", res);
//     });

    window.alert(JSON.stringify({uid,pass}));

}

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