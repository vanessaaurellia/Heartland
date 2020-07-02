let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

var button = document.getElementById('loginbutton');
button.disabled = true;

function validasi(){
    var message = "";
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(email.indexOf("@") == -1 || email.length < 6){
        message = "Please enter valid email";
        document.getElementById("error").innerHTML = message;
    }
    else if(password == ""){
        message = "Please enter valid password";
        document.getElementById("error").innerHTML = message;
    }
    else{
        message = "";
        document.getElementById("error").innerHTML = message;
        button.disabled = false;
    }
}

$('#loginbutton').click(function(){
    let emailmasuk = document.getElementById("email").value;
    let passwordmasuk = document.getElementById("password").value;
    var btn = document.getElementById("blogin");

    const users = JSON.parse(sessionStorage.getItem('user'));

    if(users != null){
        if(users.email == emailmasuk){
            if(users.password == passwordmasuk){
                alert("Succesfully login");
                sessionStorage.setItem('loginUser', JSON.stringify(users));
                location.replace("./index.html");
                btn.value = 'my value';
                btn.innerHTML = 'LOGOUT';
            }
            else{
                alert("Wrong Password!");
            }
        }
        else{
            alert("Email or password is invalid");
        }
    }
    else{
        alert("Email or password is invalid");
    }
});
