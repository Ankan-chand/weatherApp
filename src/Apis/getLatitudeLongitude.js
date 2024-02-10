const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const getLatitudeLongitude = async (cityName) => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
    const data = await response.json()
    const {lat, lon} = data[0];

    return {lat, lon};
}

export default getLatitudeLongitude;