$(function() {
    $("#register-link").click(function() {
        $("#login-box").hide();
        $("#register-box").show();
    });
    $("#login-link").click(function() {
        $("#login-box").show();
        $("#register-box").hide();
    });
    $("#register-btn").click(function() {
        $("#register-box").hide();
        $("#forgot-box").show();
        sendVerificationMail()
    });

});

function goToIndex() {
    location.href = '/FrontEnd/HTML/index.html';
}

function goToSignIn() {
    location.href = '/FrontEnd/HTML/login_register.html';
}