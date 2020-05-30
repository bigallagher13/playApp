document.getElementById('generate').addEventListener('click', performAction);

//let temperature = document.getElementById('temp');
//let summary = document.getElementById('description');

function performAction(e) {
  getLocation();
};


const getLocation = () => {
  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log(lat,lon);

      const proxy = 'https://cors-anywhere.herokuapp.com/';
      const api = `${proxy}https://api.darksky.net/forecast/4160f64f26a16b919b1fd34d277b676c/${lat},${lon}`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          const temperature = data.currently.temperature;
          const summary = data.currently.summary;
          temp.textContent = temperature.toFixed(0)+'°'+'F';
          description.textContent = summary;
        });
      });

  } else {
    console.log('geolocation not available');
    };
  };
