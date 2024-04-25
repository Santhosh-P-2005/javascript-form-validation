const pw = document.getElementById("password1");
const cpw = document.getElementById("cpassword");
let uname = document.getElementById("username");
const mail = document.getElementById("mail");
const pname = document.getElementById("P-name");
const date = document.getElementById("date");
document.getElementById("username").addEventListener("blur",blurname,false);
document.getElementById("mail").addEventListener("blur",blurmail,false);
document.getElementById("cpassword").addEventListener("blur",compare,false);
document.getElementById("P-name").addEventListener("blur",blurproduct,false);
document.getElementById("check").addEventListener("blur",blurterms,false);


function blurname(element){
    let p = document.getElementById("name");
    
    if(uname.value==""){
        p.style.visibility = "visible";
        p.textContent = "Please enter your name";
        p.style.color="red";
    }
    else{
        p.style.visibility = "hidden";
    }
}
function blurmail(element){
    let p = document.getElementById("email");

    if(element.target.value==""){
        p.style.visibility = "visible";
        p.textContent = "Please enter your mail";
        p.style.color="red";
    }
    else{
        p.style.visibility = "hidden";
    }
}
function compare()
{
    let p = document.getElementById("pass");
    if (pw.value!=cpw.value)
    {
        p.textContent = "Please enter correct password";
        p.style.visibility = "visible";
        p.style.color="red";
    }
    else if(pw.value == "" || cpw.value == "")
    {
        p.textContent = "Enter your password";
        p.style.visibility = "visible";
        p.style.color="red";
    }
    else
    {
        p.style.visibility = "hidden";
    }
}
function blurproduct(element){
    let p = document.getElementById("pro");

    if(element.target.value==""){
        p.style.visibility = "visible";
        p.textContent = "Enter product name";
        p.style.color="red";
    }
    else{
        p.style.visibility = "hidden";
    }
}
function blurterms(element){
    let p = document.getElementById("terms");

    if(!
        heckbox.checked){
        p.style.visibility = "visible";
        p.textContent = "*please, accept our terms and conditions";
        p.style.color="red";
    }
    else{
        p.style.visibility = "hidden";
    }
}


document.getElementById("show").addEventListener("click", showPassword, false);
function showPassword(element){
    var pas = document.getElementById("password1");
    var confirm_password = document.getElementById("cpassword");
    if(element.target.checked){
            confirm_password.type = "text";
            pas.type = "text";
    }   
    else
    {
            confirm_password.type = "password";
            pas.type = "password";
    }

    
}

