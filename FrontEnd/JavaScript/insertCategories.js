
function insertCategories(categories){
  select = document.getElementById( 'category' );
  data=``
  categories.forEach(element => {
    data+=`<a onclick="getTextFilter('${element}')" href="#">${element}</a>`
    option = document.createElement( 'option' );
      option.value = option.text = element;
      select.add( option );
  });
  document.getElementById("myDropdownCategoryFilter").innerHTML = data
}