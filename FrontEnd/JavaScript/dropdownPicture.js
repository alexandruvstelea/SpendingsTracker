function myFunctionDropdown() {
    document.getElementById("myDropdownPicture").classList.toggle("showPicture");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnPicture')) {
        var dropdownsPicture = document.getElementsByClassName("dropdownPicture-content");
        var i;
        for (i = 0; i < dropdownsPicture.length; i++) {
            var openDropdownPicture = dropdownsPicture[i];
            if (openDropdownPicture.classList.contains('showPicture')) {
                openDropdownPicture.classList.remove('showPicture');
            }
        }
    }
    
})

$(document).ready(function() {
    $("#myDropdownPicture  img").click(function() {
        newPhoto = $(this).attr("src")
        document.getElementById("changePicture").src = newPhoto
        localStorage.setItem("picture", newPhoto)
    })
})


function getCurrentPicture() {
    selectedPicture = localStorage.getItem("picture");
    if (selectedPicture == null){
        document.getElementById("changePicture").src = '../Image/icon1.png'
        selectedPicture = '../Image/icon1.png'
    }
    else
        document.getElementById("changePicture").src = selectedPicture
}