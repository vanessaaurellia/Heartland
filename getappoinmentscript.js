let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

function choose(sp, dc){
    var sp = document.getElementById(sp);
    var dc = document.getElementById(dc);
    dc.innerHTML = "";
    if(sp.value == "allergist"){
        var Array = ["Choose an allergist", "Dr. Najib", " Dr. Reta"];
    }
    else if(sp.value == "dentist"){
        var Array = ["Choose an dentist", "Dr. Aurellia", "Dr. Natanael"];
    }
    else if(sp.value == "medical"){
        var Array = ["Choose an medical", "Dr. Cul", "Dr. Malvin"];
    }
    else if(sp.value == "surgeon"){
        var Array = ["Choose an surgeon", "Dr. Mike", "Dr. Keef", "Dr. Theo"];
    }
    for(var option in Array){
        var doctor = Array[option];
        var newOption = document.createElement("option");
        newOption.innerHTML = doctor;
        dc.options.add(newOption);
    }
}

var button = document.getElementById('bookbutton');
button.disabled = true;

function validasi(){
    var message = "";
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var purpose = document.getElementsByName("purpose")[0].value;
    var specialist = document.getElementsByName("specialist")[0].value;
    var code = document.getElementById("code").value;

    if(purpose == "choose"){
        message = "Please choose the purpose";
        document.getElementById("error").innerHTML = message;
    }
    else if(specialist == "choose"){
        message = "Please choose the specialist";
        document.getElementById("error").innerHTML = message;
    }
    else if(date == ""){
        message = "Please enter valid date";
        document.getElementById("error").innerHTML = message;
    }
    else if(time == ""){
        message = "Please enter valid time";
        document.getElementById("error").innerHTML = message;
    }
    else if(code != "0609" || code == ""){
        message = "Please enter valid code";
        document.getElementById("error").innerHTML = message;
    }
    else{
        message = "";
        document.getElementById("error").innerHTML = message;
        button.disabled = false;
    }
}

function book(){
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    alert("Successfully booked! Date: " + date + " Time: " + time);
}