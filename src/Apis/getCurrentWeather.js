const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

const getCurrentWeather = async (latitude, longitude) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);

    const data = await response.json();

    const {main, icon} = data.weather[0];
    const {temp, feels_like, humidity} = data.main;
    const {speed} = data.wind;

    const image=await fetch(`http://openweathermap.org/img/w/${icon}.png`)
    console.log(image)
    const img=image.url;


    
    return {main, img, temp, feels_like, humidity, speed};

}

export default getCurrentWeather;