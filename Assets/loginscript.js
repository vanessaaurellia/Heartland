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
