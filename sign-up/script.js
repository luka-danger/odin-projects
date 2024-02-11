function onChange() {
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirmPassword").value;

    let error = document.querySelector("#error");

    if (password = "" && confirmPassword == "") {
        error.innerText = ""
    }
    else if (password === confirmPassword)  {
        error.innerText = ""
    }
    else if(password === confirmPassword) {
        error.innerText = "Passwords do not match"
    }
}