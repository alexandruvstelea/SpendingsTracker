$(function() {
    $("#register-link").click(function() {
        $("#login-box").hide();
        $("#register-box").show();
    });
    $("#login-link").click(function() {
        $("#login-box").show();
        $("#register-box").hide();
    });
    // $("#register-btn").click(function() {
    //     $("#login-box").show();
    //     $("#register-box").hide();
    // });

});
function goToIndex(){
    location.href = '/FrontEnd/HTML/index.html';
    console.log("dsadsad")
}
