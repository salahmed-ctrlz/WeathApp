const apiKey = "28a5809143e666ac028df70db4742921";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchForm = document.getElementById("searchForm");
const cityInput = document.getElementById("cityInput");
const errorMessage = document.getElementById("errorMessage");
const weatherIcon = document.querySelector(".weather-icon");
const cityInfoDiv = document.getElementById("cityInfo");

// Hide city info initially
cityInfoDiv.style.display = "none";

const cities = {
    "quds": "Jerusalem",
    "yaffa": "Tel Aviv",
    "akka": "Acre",
    "umm khalid": "Netanya",
    "isdud": "Ashdod",
    "askalan": "Ashkelon",
    "zakaria": "Zikhron Ya'akov",
    "beer sabe": "Beer Sheva",
    "al khalisa": "Kiryat Shmona",
    "al birwa": "Ahihud",
    "al lydd": "Lod",
    "al khalil": "Hebron"
};

const displayNames = {
    "Jerusalem": "Al-Quds (القدس)",
    "Tel Aviv": "Yaffa (يافا)",
    "Acre": "Akka (عكّا)",
    "Netanya": "Umm Khalid (أم خليد)",
    "Ashdod": "Isdud (إسدود)",
    "Ashkelon": "Askalan (عسقلان)",
    "Zikhron Ya'akov": "Zakaria (زكريا)",
    "Beer Sheva": "Beer Sabe (بئر السبع)",
    "Kiryat Shmona": "Al Khalisa (الخالصة)",
    "Ahihud": "Al Birwa (البيرة)",
    "Lod": "Al Lydd (اللد)",
    "Hebron": "Al Khalil (الخليل)"
};

async function checkWeather(city) {
    city = city.toLowerCase();
    if (cities[city]) {
        city = cities[city];
    }
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        errorMessage.style.display = "block";
        hideWeatherInfo();
        hideCityInfo();
    } else {
        errorMessage.style.display = "none";
        const data = await response.json();

        if (data.sys.country === "IL") {
            data.sys.country = "PS";
        }

        displayWeatherInfo(data);
        displayCityInfo(data);
    }
}

function displayWeatherInfo(data) {
    const cityName = displayNames[data.name] || data.name;

    document.querySelector(".city").textContent = cityName;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + " km/h";

    // Update weather icon based on weather condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
}

function displayCityInfo(data) {
    const country = data.sys.country || "N/A";

    document.getElementById("country").textContent = country;

    cityInfoDiv.style.display = "block";
}

function hideWeatherInfo() {
    document.querySelector(".weather").style.display = "none";
}

function hideCityInfo() {
    cityInfoDiv.style.display = "none";
}

// Event listener for form submission
searchForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission
    const city = cityInput.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        // If no city name entered, hide error message and other elements
        errorMessage.style.display = "none";
        hideWeatherInfo();
        hideCityInfo();
    }
});

// Initial weather for default city 'Quds'
checkWeather("Quds");

// Canvas animation code remains unchanged
document.addEventListener('DOMContentLoaded', function() {
    // ... (keep the existing canvas animation code here)
});