const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY;

const getDailyForecast = async(latitude, longitude) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${apiKey}`);

    const parsedData = await response.json();

    const data = parsedData.data.slice(1,4);

    const threeDayForecastData = data.reduce((accumulator, current) => {
        const {datetime, temp} = current;
        const {icon} = current.weather;

        accumulator.push({
            datetime,
            temp,
            icon
        });

        return accumulator;
    }, []);

    return threeDayForecastData;    
}

export default getDailyForecast;