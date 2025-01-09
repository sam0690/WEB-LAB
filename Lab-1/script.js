const formValidator = (e) => {
    const username = document.getElementsByClassName('username');
    if(username.value.trim().length < 4){
        username.style.border = "solid 1px red";
        alert("username should be at least 4 characters");
        return false;
    }
}