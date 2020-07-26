// Появление и скрытие формы - начало.
var link = document.querySelector(".search-form-button");
var hotelSearch = document.querySelector(".hotels-search");

hotelSearch.classList.add("hotels-search-toggle");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	hotelSearch.classList.toggle("hotels-search-toggle");
	hotelSearch.classList.remove("form-error");
});
// Появление и скрытие формы - конец.

