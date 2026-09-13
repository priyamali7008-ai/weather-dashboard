# 🌤️ Real-Time Weather Dashboard

A responsive and interactive **Weather Dashboard** built using **HTML5, CSS3, and JavaScript**. This project demonstrates asynchronous JavaScript, RESTful API integration, Fetch API, `async/await`, JSON processing, error handling, and dynamic DOM manipulation.

Users can search for a city and view current weather information including **temperature, humidity, wind speed, feels-like temperature, pressure, and weather conditions**.

## 🚀 Live Demo
'https://priyamali7008-ai.github.io/weather-dashboard/'



## 📌 Project Overview

The Weather Dashboard retrieves real-time weather information from the **OpenWeather API** based on the city entered by the user.

The project demonstrates how a client-side JavaScript application can communicate with a RESTful API, process nested JSON data, handle asynchronous operations, and dynamically update the webpage.

## ✨ Key Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* 💧 Display humidity
* 💨 Display wind speed
* 🌡️ Display feels-like temperature
* 📊 Display atmospheric pressure
* ☁️ Display current weather condition
* 🌐 Fetch real-time weather data from a REST API
* ⚡ Use the modern Fetch API
* 🔄 Use `async/await` for asynchronous operations
* 📦 Parse nested JSON responses
* 🖥️ Dynamically update the DOM
* ⚠️ Comprehensive error handling
* 📱 Responsive design
* ♿ Accessible form and interface

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Fetch API**
* **Async/Await**
* **RESTful API**
* **JSON**
* **DOM Manipulation**
* **OpenWeather API**

## 📂 Project Structure

```text
weather-dashboard/
│
├── index.html
├── style.css
├── script.js
├── config.js
├── .gitignore
└── README.md
```

> `config.js` contains the API key and should **not be uploaded to GitHub**.

## 🔄 Application Workflow

```text
User enters city name
        ↓
Search button clicked
        ↓
JavaScript creates API request
        ↓
Fetch API sends request
        ↓
OpenWeather API returns JSON
        ↓
JavaScript parses JSON
        ↓
Weather information is extracted
        ↓
DOM is updated
        ↓
Weather information is displayed
```

## 🌐 REST API Integration

This project uses the **OpenWeather API** to retrieve current weather information.

The JavaScript application sends the city name to the API and receives weather information in JSON format.

Example request structure:

```javascript
const url =
    `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

const response = await fetch(url);
const data = await response.json();
```

## ⚡ Asynchronous JavaScript

The project uses `async/await` to handle asynchronous API requests.

Example:

```javascript
async function getWeather(city) {

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data.");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {

        showError(e
```
