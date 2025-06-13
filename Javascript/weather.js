// weather.js
async function getWeather(city = "Toledo") {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const current = data.current;
    const forecast = data.forecast.forecastday;

    const weatherHTML = `
      <h3>${data.location.name} Weather</h3>
      <div class="temp fs-4">${current.temp_f}°F</div>
      <div class="condition d-flex align-items-center justify-content-center gap-2">
        <img src="https:${current.condition.icon}" alt="${current.condition.text}" class="weather-icon" />
        <span>${current.condition.text}</span>
      </div>
      <div class="forecast mt-3 d-flex justify-content-around">
        ${forecast.slice(1).map(day => `
          <div class="text-center">
            <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}" class="forecast-icon" />
            <div>${Math.round(day.day.maxtemp_f)}° / ${Math.round(day.day.mintemp_f)}°</div>
          </div>
        `).join('')}
      </div>
    `;

    document.getElementById("weather").innerHTML = weatherHTML;
  } catch (err) {
    console.error("Weather fetch error:", err);
    document.getElementById("weather").innerHTML = "<p>Unable to fetch weather info 🐾</p>";
  }
}

getWeather();
