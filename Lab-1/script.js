function formValidator(){
    console.log("validation started")
    //validating username or getting the username correctly
    const username = document.getElementById('username').value;
    if(username.length < 4){
        console.log("username validation failes")
        document.getElementById('username').style.border = "solid 1px red";
        alert("username should be at least 4 characters");
        return false;
    }

    //getting the correct pattern for a password

    const password = document.getElementById('password').value;
    const passpattern = /^[0-9].*#$/;
    if( !passpattern.test(password)){
        document.getElementById('password').style.border = 'soid 1px red';
        alert("Password should start with a digit and end with #.");
        return false;
    }


    //validating checkbox selection

    const education = document.getElementsByName('education[]');
    let checked = false;
    for ( let i = 0 ; i<education.length;i++){
        if(education[i].checked){
            checked = true;
            break;
        }
    }

    if(!checked){
        alert("Please select at least one educational field");
        return false;
    }


    return true;
}