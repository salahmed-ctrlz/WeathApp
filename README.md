# WeathApp

WeathApp is a simple weather application that provides current weather information, city details, and a map view for various cities. It uses the OpenWeatherMap API to fetch weather data and the MapTiler API for map rendering. The application also includes custom city name translations for a few specific cities.

## Features

- Fetch current weather data for any city
- Display temperature, humidity, and wind speed
- Show city details including population, area, and country
- Render a map view of the city
- Custom city name translations and search capabilities

## Technologies Used

- HTML, CSS, and JavaScript for the frontend
- OpenWeatherMap API for weather data
- MapTiler API for map rendering

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/WeathApp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd WeathApp
   ```
3. Open `index.html` in your favorite web browser.

## Configuration

1. Obtain API keys from [OpenWeatherMap](https://openweathermap.org/api) and [MapTiler](https://www.maptiler.com/).
2. Replace the placeholder API keys in `script.js` with your own:
   ```javascript
   const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
   const mapTilerApiKey = "YOUR_MAPTILER_API_KEY";
   ```

## Usage

1. Enter a city name in the search box and click the search button.
2. The application will display the current weather information, city details, and a map view.
3. You can search for cities using alternative names provided in the application.

## Custom City Translations

The application includes custom translations for the following cities:
- Jerusalem = Al-Quds (القدس)
- Tel Aviv = Yaffa (يافا)
- Acre = Akka (عكّا)
- Netanya = Umm Khalid (أم خليد)
- Ashdod = Isdud (إسدود)
- Ashkelon = Askalan (عسقلان)
- Zikhron Ya'akov = Zakaria (زكريا)
- Beer Sheva = Beer Sabe (بئر السبع)
- Kiryat Shmona = Al Khalisa (الخالصة)
- Ahihud = Al Birwa (البيرة)
- Lod = Al Lydd (اللد)
- Hebron = Al Khalil (الخليل)

You can also search for these cities using their alternative names.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/api)
- [MapTiler](https://www.maptiler.com/)
```

Feel free to customize this `README.md` file further to match your project's specific details and preferences.
