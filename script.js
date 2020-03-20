var input = document.querySelector("#entered-city");
var weatherIcon = document.querySelector("#icon");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector("#wind");
var uv = document.querySelector("#uv");
var button = document.querySelector("#city");
var jumbCityDate = document.querySelector(".display-4");
const listgroup = document.querySelector(".list-group");
let lat;
let lon;
let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "&appid=b3c16c200dca6b3849d8f35c7ecd0e1f";

button.addEventListener("click", function(name) {
  fetch(url + input.value + "&units=imperial" + apiKey)
    .then(response => response.json())
    .then(data => {
      let tempF = data["main"]["temp"];
      let cityName = data["name"];
      //   var descValue = data["weather"][0]["description"];
      let icon = data["weather"][0]["icon"];
      let perHumidity = data["main"]["humidity"];
      let windSp = data["wind"]["speed"];
      let dateCity = data["dt"];
      lat = data["coord"]["lat"];
      lon = data["coord"]["lon"];
      console.log(dateCity);
      console.log(icon);

      jumbCityDate.innerHTML = new Date(dateCity * 1000).toLocaleString(
        "en-US"
      );
      weatherIcon.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      input.innerHTML = cityName;
      humidity.innerHTML = "Humidity: " + perHumidity + "%";
      temp.innerHTML = "Temp: " + tempF + " °F";
      wind.innerHTML = "Wind Speed: " + windSp + " MPH";

      //   input.value = "";
    });

  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://community-open-weather-map.p.rapidapi.com/forecast?q=atlanta&units=imperial&cnt=41",
    method: "GET",
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "7fa18c5501msh8e0e5b4225ede0fp118d8ajsne7b143977a3e"
    }
  };


//   <div class="card text-white bg-primary mb-3">
//           <div class="card-date">Date</div>
//           <div class="card-body">
//             <h5 class="icon">icon</h5>
//             <h5 class="temp">Temperature Here</h5>
//             <h5 class="humidity">Humidity Here</h5>
//           </div>
//         </div>

  $.ajax(settings)
    .done(function(response) {
      console.log(response);
      for (var i = 0; i < response.array.length; i += 8) {
        let cardContainer;

let createTaskCard = (task) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = task.title;
    title.className = 'card-title';

    let color = document.createElement('div');
    color.innerText = task.color;
    color.className = 'card-color';


    cardBody.appendChild(title);
    cardBody.appendChild(color);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);

}

let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
        createTaskCard(task);
    });
};

initListOfTasks();

    .catch(err => alert("Something went wrong! Refresh and try again."));
});

// fetch(
//     " http://api.openweathermap.org/data/2.5/uvi?appid=" + "b3c16c200dca6b3849d8f35c7ecd0e1f&" +
//       lat.value + "&" + lon.value + "cnt=1"
//   )

// http://api.openweathermap.org/data/2.5/uvi?appid=b3c16c200dca6b3849d8f35c7ecd0e1f&lat=33.75&lon=-84.39&cnt=1 URL for UV index

// var curCity = $("#entered-city").val();
// console.log(curCity)
// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather?q=" + curCity + "&units=imperial" + "&APPID=b3c16c200dca6b3849d8f35c7ecd0e1f",
//     type: "GET",
//     dataType: "json",
//     success:function(response_data_json) {
//         // view_data = response_data_json;
//         console.log(response_data_json); //Shows the correct piece of information
//         // doWork(view_data);
//     }
//  });

// var curCity = $("#entered-city").val();

//  $(document).ready(function(){
//  $("#city").on("click", function(){

// if (curCity != "") {

// });
// }
// else{
//     $("#entered-city").html("No input detected. Please enter a city.")
// }
// });
//      });

//  $("").on("click", function(){
// function doWork(data)
// {
//     console.log(curCity)
// }
// });
// });

// function cityData(curCity) {
//     $.ajax({
//       url: "http://api.openweathermap.org/data/2.5/weather?q=" +curCity+ "&units=imperial" + "&APPID=b3c16c200dca6b3849d8f35c7ecd0e1f",
//       success:function(data) {
//         console.log(data);
//       }
//     });
//   }

// $("#city").on("click", function(){

//     if(curCity != ""){

//         $.ajax({
//             url: "http://api.openweathermap.org/data/2.5/weather?q=" +curCity+ "&units=imperial" + "&APPID=b3c16c200dca6b3849d8f35c7ecd0e1f",
//             type: "GET",
//             dataType: "json",
//             success: function(data){
//                 console.log(data);
//                 console.log(curCity);

//             }

//         });
//     cityData(curCity){
//         console.log(data);
//         });

//     }else{
//         $("#error").html("No input detected. Please enter a city.")

//     }

//     });

// });
