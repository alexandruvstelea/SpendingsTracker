function getCategories() {
    const url = 'http://127.0.0.1:5000/readcategories?'
    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(complete_response) {
            insertCategories(complete_response.categories)
        })
        .catch((err) => {
            console.log(err)
        })
}

function insertCategories(categories) {
    select = document.getElementById('categoryAddSpending');
    data = ``
    categories.forEach(element => {
        data += `<a onclick="getTextFilter('${element}')" href="#">${element}</a>`
        option = document.createElement('option');
        option.value = option.text = element;
        select.add(option);
    });
    document.getElementById("myDropdownCategoryFilter").innerHTML = data
}