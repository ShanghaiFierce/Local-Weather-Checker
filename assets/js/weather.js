var btn = document.querySelector('#search-form');
var cityInputE1 = document.querySelector("#search-input");
var currentCitySearch = document.querySelector("#current-search");
var otherCitiesE1 = document.querySelector("#active-cities");
var currentTempE1 = document.querySelector("#current-card-text");
var inputForm = document.querySelector("#search-form");

// get and store the search input value
var formSubmit = function(event) {
    // event.preventDefault();

    var city = cityInputE1.value.trim();

    currentCitySearch.innerHTML = "";
    currentCitySearch.innerHTML = city;
    console.log(city);

    getWeather(currentCitySearch);
};

btn.addEventListener("submit", formSubmit());

// fetch the weather API
function getWeather (cityInputE1) {
    var apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" +cityInputE1+ "&appid=eae04003069ae74386f85b8638708cb7";
    
    // make a request to the url
    fetch(apiWeather)
        console.log(apiWeather);
        response.json().then(function() {
        displayWeather(main, name);
        
    })
} 

// check the API with the search input value
var displayWeather = function(city, country, list){
    // insert the search data into the feature section

    // display the data in the "top" section
    

    // // due date was clicked
    // $(".list-group").on("click", "span", function() {
    //     // get current text
    //     var date = $(this).text().trim();
    
    //     // create new input element
    //     var dateInput = $("<input>").attr("type", "text").addClass("form-control").val(date);
    
    //     $(this).replaceWith(dateInput);

    //     // clear old content
    //     inputForm.textContent = "";
    //     currentTempE1.textContent = cityName;
    //     currentTempE1.textContent = cityName;

    //     // append container to the dom
    //     repoContainerEl.appendChild(repoEl);

    //     // variables for 5 day information (loop)
    //     // display 5 day forecast in the bottom section
    //     // keep the toggle option available for user if they want to select another city they searched before
}
