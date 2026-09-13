// ==========================================
// Weather Dashboard
// ==========================================

// API configuration
const API_KEY = "df358b3b34023e6f2cecf1dd1e45e95";

const API_URL =
    "https://api.openweathermap.org/data/2.5/weather";


// ==========================================
// Get HTML Elements
// ==========================================

const weatherForm =
    document.getElementById("weather-form");

const cityInput =
    document.getElementById("city-input");

const loading =
    document.getElementById("loading");

const errorMessage =
    document.getElementById("error-message");

const weatherResult =
    document.getElementById("weather-result");

const cityName =
    document.getElementById("city-name");

const weatherDescription =
    document.getElementById("weather-description");

const weatherIcon =
    document.getElementById("weather-icon");

const temperature =
    document.getElementById("temperature");

const humidity =
    document.getElementById("humidity");

const windSpeed =
    document.getElementById("wind-speed");

const feelsLike =
    document.getElementById("feels-like");

const pressure =
    document.getElementById("pressure");


// ==========================================
// Form Submit Event
// ==========================================

weatherForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (city === "") {

        showError("Please enter a city name.");

        return;
    }

    getWeather(city);

});


// ==========================================
// Fetch Weather Data
// ==========================================

async function getWeather(city) {

    showLoading();

    hideError();

    weatherResult.classList.add("hidden");

    try {

        const url =
            `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

        const response =
            await fetch(url);


        // Check HTTP response
        if (!response.ok) {

            if (response.status === 404) {

                throw new Error(
                    "City not found. Please check the city name."
                );

            }

            if (response.status === 401) {

                throw new Error(
                    "Invalid API key. Please check your API key."
                );

            }

            throw new Error(
                "Unable to fetch weather data."
            );
        }


        // Convert response to JSON
        const data =
            await response.json();


        // Display data
        displayWeather(data);

    }

    catch (error) {

        console.error(
            "Weather API Error:",
            error
        );

        showError(
            error.message ||
            "Something went wrong. Please try again."
        );

    }

    finally {

        hideLoading();

    }
}


// ==========================================
// Display Weather
// ==========================================

function displayWeather(data) {

    // City
    cityName.textContent =
        `${data.name}, ${data.sys.country}`;


    // Weather condition
    weatherDescription.textContent =
        data.weather[0].description;


    // Temperature
    temperature.textContent =
        Math.round(data.main.temp);


    // Humidity
    humidity.textContent =
        data.main.humidity;


    // Wind speed
    windSpeed.textContent =
        data.wind.speed;


    // Feels like
    feelsLike.textContent =
        Math.round(data.main.feels_like);


    // Pressure
    pressure.textContent =
        data.main.pressure;


    // Weather icon
    const iconCode =
        data.weather[0].icon;

    weatherIcon.src =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherIcon.alt =
        data.weather[0].description;


    // Show weather result
    weatherResult.classList.remove("hidden");

}


// ==========================================
// Show Loading
// ==========================================

function showLoading() {

    loading.classList.remove("hidden");

}


// ==========================================
// Hide Loading
// ==========================================

function hideLoading() {

    loading.classList.add("hidden");

}


// ==========================================
// Show Error
// ==========================================

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.classList.remove(
        "hidden"
    );

}


// ==========================================
// Hide Error
// ==========================================

function hideError() {

    errorMessage.textContent = "";

    errorMessage.classList.add(
        "hidden"
    );

}