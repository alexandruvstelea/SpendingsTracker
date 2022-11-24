function myFunctionCategoryFilter() {
    document.getElementById("myDropdownCategoryFilter").classList.toggle("showCategoryFilter");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnCategoryFilter')) {
        var dropdowns = document.getElementsByClassName("dropdownCategoryFilter-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showCategoryFilter')) {
                openDropdown.classList.remove('showCategoryFilter');
            }
        }
    }
})

$(document).ready(function() {
  $("#myDropdownCategoryFilter a").click(function() {
    filterSelected = $(this).text()
      document.getElementById("dropbtnCategoryFilter").innerText = filterSelected
  })
})

function myFunctionOrderFilter() {
    document.getElementById("myDropdownOrderFilter").classList.toggle("showOrderFilter");
}

window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtnOrderFilter')) {
        var dropdowns = document.getElementsByClassName("dropdownOrderFilter-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showOrderFilter')) {
                openDropdown.classList.remove('showOrderFilter');
            }
        }
    }
})

$(document).ready(function() {
  $("#myDropdownOrderFilter a").click(function() {
    filterSelected = $(this).text()
      document.getElementById("dropbtnOrderFilter").innerText = filterSelected
  })
})