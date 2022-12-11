var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function registerValidate() {
    errorRegister = ''
    errorInputRegister = false

    if (document.getElementById("registerName").value === '') {
        errorRegister += "Name Empty!<br>"
        errorInputRegister = true
    }

    if (!document.getElementById("registerEmail").value.match(validEmailRegex)) {
        errorRegister += "Invalid email address!<br>";
        errorInputRegister = true
    }

    if (document.getElementById("registerPassword").value.length <= 6) {
        errorRegister += "Password to small!"
        errorInputRegister = true
    } else if (document.getElementById("registerPassword").value != document.getElementById("cpassword").value) {
        errorRegister += "Passwords dosen't mach!"
        errorInputRegister = true
    }

    if (errorInputRegister == false) {
        registerBtn()
        document.getElementById("errorRegisterMessage").setAttribute("style", "display:none")
    } else
        errorMessageRegister(errorRegister)
}

function errorMessageRegister(message) {
    document.getElementById("errorRegisterMessage").setAttribute("style", "display:block")
    document.getElementById("insertRegisterError").innerHTML = message
}


function loginValidate() {
    if (document.getElementById("email").value === 'a' || document.getElementById("password").value === 'a') {
        document.getElementById("errorLoginMessage").setAttribute("style", "display:block")
        document.getElementById("insertLoginError").innerHTML = "Invalid Passowrd or E-mail"
    }
}