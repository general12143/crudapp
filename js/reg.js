$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        
        var email = $("#email").val();
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var password = $("#password"),val();
        
        var valid = true;
        
        if(firstname == ""){
            valid = false;
            $("#errorFirstname").html("Firstname connot be empty");
        }else{
            $("#errorFirstname").html("");
        }
        
        if(lastname == ""){
            valid = false;
            $("#errorLastname").html("Lastname connot be empty");
        }else{
            $("#errorLastname").html("");
        }
        
        if(email == ""){
            valid = false;
            $("#errorEmail").html("Email field cannot be empty");
        }else{
            $("errorEmail").html("");
        }
        
        if(password == ""){
            valid = false;
            $("#errorPassword").html("Password field cannot be empty")
        }else{
            $("#errorPassword").html("");
        }
        
    });
});