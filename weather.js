async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'your_openweathermap_api_key';

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === '404') {
    document.getElementById('weatherResult').innerHTML = "City Not Found!";
  } else {
    document.getElementById('weatherResult').innerHTML = `
      <p>Location: ${data.name}</p>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  }
}
