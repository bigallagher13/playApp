document.getElementById('generate').addEventListener('click', performAction);
document.getElementById('generate').addEventListener('click', hideButton);


function hideButton() {
  document.getElementById('generate').style.display = 'block';
  this.style.display = 'none'
};

function performAction(e) {
  getLocation();
};


const getLocation = () => {
  if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

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
          const icon = data.currently.icon;
          temp.textContent = 'It is: '+temperature.toFixed(0)+'°'+'F';
          description.textContent = 'Conditions: '+summary;
          //invoke icon function
          setIcon(icon, document.querySelector('#icon'));

        });
      });

      function setIcon(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
      };

  } else {
    console.log('geolocation not available');
    };
  };
