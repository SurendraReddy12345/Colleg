function validate(){
    var username=document.getElementById("uname");
    var password=document.getElementById("pass");

    if(username.value.trim()=="")
    {
        
        document.getElementById("notvaild").style.visibility="visible";

        return false;

    }
    else if(password.value.trim()==""){
        
        document.getElementById("notvaild1").style.visibility="visible";
        return false;
    }
    else if(password.value.trim().length<6){
        alert("password too short");
        return false;
    }
    else{
        true;
    }

}