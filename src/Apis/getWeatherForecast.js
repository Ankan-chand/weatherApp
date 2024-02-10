import getCurrentWeather from "./getCurrentWeather";
import getDailyForecast from "./getDailyForecast";
import getLatitudeLongitude from "./getLatitudeLongitude"



export const getWeatherForecast = async (cityName) => {
    const {lat, lon} = await getLatitudeLongitude(cityName);

    const {main, img, temp, feels_like, humidity, speed} = await getCurrentWeather(lat,lon);

    // const threeDayForecastData = await getDailyForecast(lat, lon);

    return {main, img, temp, feels_like, humidity, speed}
}