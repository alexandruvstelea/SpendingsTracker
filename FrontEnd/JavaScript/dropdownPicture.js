function myFunctionDropdown() {
    document.getElementById("myDropdownPicture").classList.toggle("showPicture");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtnPicture')) {
        var dropdowns = document.getElementsByClassName("dropdownPicture-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showPicture')) {
                openDropdown.classList.remove('showPicture');
            }
        }
    }
}

$(document).ready(function() {
    $("#myDropdownPicture  img").click(function() {
        newPhoto = $(this).attr("src")
        document.getElementById("changePicture").src = newPhoto
        localStorage.setItem("picture", newPhoto)
    })
})

function getCurrentPicture() {
    selectedPicture = localStorage.getItem("picture");
    if (selectedPicture == null)
        document.getElementById("changePicture").src = '../Image/icon1.png'
    else
        document.getElementById("changePicture").src = selectedPicture
}