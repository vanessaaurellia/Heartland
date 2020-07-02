let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

var button = document.getElementById('registerbutton');
button.disabled = true;

function validasi(){
    var message = "";
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var birthday = document.getElementById("birthday").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var terms = document.getElementById('terms');
    
    if(name.length < 5){
        message = "Please enter valid name";
        document.getElementById("error").innerHTML = message;
    }
    else if(email.indexOf("@") == -1 || email.length < 6){
        message = "Please enter valid email";
        document.getElementById("error").innerHTML = message;
    }
    else if(password1 < 6){
        message = "Please enter valid password & more than 6 characters";
        document.getElementById("error").innerHTML = message;
    }
    else if(password1 != password2){
        message = "Password doesn't match";
        document.getElementById("error").innerHTML = message;
    }
    else if(birthday == ""){
        message = "Password enter valid date";
        document.getElementById("error").innerHTML = message;
    }
    else if(isNaN(phone) || phone.length < 11){
        message = "Please enter valid phone number";
        document.getElementById("error").innerHTML = message;
    }
    else if(address.length < 10){
        message = "Please enter valid address";
        document.getElementById("error").innerHTML = message;
    }
    else if(!terms.checked){
        message = "Please check terms & conditions";
        document.getElementById("error").innerHTML = message;
    }
    else{
        message = "";
        document.getElementById("error").innerHTML = message;
        button.disabled = false;
    }
}

function register(){
    const semuaData = $('form#register').serializeArray();
    let inputData = {};
    semuaData.forEach(data => {
        if(data.name == "password1" || data.name == "password2"){
            data.name = "password";
        }
        inputData[data.name] = data.value;
    });
    sessionStorage.setItem("user", JSON.stringify(inputData));
    console.log(inputData)
    alert("Registered! Please login.");
    location.replace("./login.html");
}