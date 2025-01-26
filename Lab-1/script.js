const formValidator = (e) => {
    const username = document.getElementsByClassName('username');
    if(username.value.trim().length < 4){
        username.style.border = "solid 1px red";
        alert("username should be at least 4 characters");
        return false;
    }

    const password = document.getElementsByClassName('password');
    if( ! password.value.match(/[0-9][a-zA-Z0-9]*[a-zA-Z0-9][$]/)){
        password.style.border = 'soid 1px red';
        alert("Password should start with a digit and end with $.");
        return false;
    }

    const boxes = document.getElementsByName('Bsc.CSIT');
    for(leti=0; i<boxes.length; i++){
        if( ! boxes[i].checked){
            alert("Please Select Your educational field.");
            return false;
        }
    }
    return true;
}