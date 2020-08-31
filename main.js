
const city = "daegu";
const apiURI = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+"a566f1b5c0cf186001054d817a05c05f";

const loading = document.getElementById('loading');
const inner = document.getElementById('out-inner');

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const json_obj = JSON.parse(this.responseText);
      const main = json_obj.weather[0].main;
      const src = '/img/' + main + '.png';
      document.getElementById("city").innerHTML = json_obj.name.toUpperCase();;
      document.getElementById("main").innerHTML = transWeather(main);
      document.getElementById("temp").innerHTML = json_obj.main.temp + '℃';
      document.getElementById("feels").innerHTML = json_obj.main.feels_like + '℃';
      document.getElementById("pressure").innerHTML = json_obj.main.pressure;
      document.getElementById("humi").innerHTML = json_obj.main.humidity + '%';
      document.getElementById("weather-icon").src = src;
    }
  };
  xhttp.open("GET", apiURI, "true");
  xhttp.send();
}

function transWeather(str){
  switch(str){
    case 'Clear':
      return '맑음';
    case 'Clouds':
      return '흐림';
  }
}

setTimeout(() => {
  loading.remove();
  inner.style.display = 'block';
}, 1500);

setInterval(loadDoc, 1000);




