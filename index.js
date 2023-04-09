
 let weather= {
   apiKey: '9397013925e979b0bd890fe0231e2cde',
   fetchWeather: function (city) {
     fetch('https://api.openweathermap.org/data/2.5/weather?q='
     + city
      +'&units=metric&appid='
       + this.apiKey).then((response) => {
         if(!response.ok){
           alert("No weather found.");
           throw new Error("No weather found.");
         }
         return response.json();
       })
       .then((data) => this.displayWeather(data));
      
 },
 displayWeather: function(data){
 const{name} = data;
 const {icon, description} = data.weather[0];
 const{temp} = data.main;
 const{sunrise,sunset}= data.sys;
 console.log(name,icon,description,temp,sunrise,sunset)
 document.querySelector(".city").innerText = "City: "+ name;
 document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
 document.querySelector(".description").innerText = "Description: "+ description;
 document.querySelector(".temp").innerText= "Temp: " +temp;
 document.querySelector(".sunrise").innerText ="Sunrise: "+ sunrise;
 document.querySelector(".sunset").innerText= "Sunset: "+ sunset;
 },

 
 }

 function submitWeather() {
  const name = document.getElementById("name").value;

 weather.fetchWeather(name)
  
}




