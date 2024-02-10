const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY;


const getHourlyForecast = async (latitude, longitude) => {
    const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?&lat=${latitude}&lon=${longitude}&key=${apiKey}`);

    const parsedData = await response.json(); 

    const data = parsedData.data;

    const currentDateTime = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    const currentHour = new Date( currentDateTime).getHours();
    const indexofNextHour = data.findIndex(current => {
        const houreOfCurrentObject =  new Date(current.timestamp_local).getHours();
        return houreOfCurrentObject > currentHour;
    });

    data = data.slice(indexofNextHour, indexofNextHour+4);

    const hourlyData = data.reduce((accumulator, current) => {
        const {temp} = current;
        const time = new Date(current.timestamp_local).getHours()+":00";
        const {icon} = current.weather;

        accumulator.push({
            temp,
            time,
            icon
        });

        return accumulator;
    },[]);


    return hourlyData;
}

export default getHourlyForecast;