const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


var request = new XMLHttpRequest();

request.open('GET', 'https://api.maas2.jiinxt.com/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

console.log(data.sol + " Sol");
console.log(data.season + " Season");
console.log(data.min_temp + " Min Temp");
console.log(data.max_temp + " Max Temp");
console.log(data.atmo_opacity + " Atmospheric Opacity");
console.log(data.sunset + " Sunset");
console.log(data.sunrise + " Sunrise");
console.log(data.min_gts_temp + " Min GTS Temp");
console.log(data.max_gts_temp + " Max GTS Temp");




var dataArray = ["Sol: " + data.sol,"Season: " + data.season,"Min Temperature (Air): " + data.min_temp + " °C","Max Temperature (Air): " + data.max_temp + " °C","Atmospheric Opacity: " + data.atmo_opacity,"Sunset: " + data.sunset,"Sunrise: " + data.sunrise,"Min Ground Temperature: " + data.min_gts_temp + " °C","Max Ground Temperature: " + data.max_gts_temp + " °C"];
    var arrayLength = dataArray.length;
    for (var i = 0; i < arrayLength; i++) {
        const h3 = document.createElement('h3');
        h3.textContent = dataArray[i];
        container.appendChild(h3);
        //Do something
    }

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Houston We Have A Problem!`;
    app.appendChild(errorMessage);
  }
}

request.send();
