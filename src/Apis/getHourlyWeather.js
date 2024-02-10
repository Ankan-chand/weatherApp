// const apiKey = process.env.REACT_APP_WEATHERBIT_API_KEY;


// const getHourlyForecast = async (latitude, longitude) => {
//     const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?&lat=${latitude}&lon=${longitude}&key=${apiKey}`);

//     const parsedData = await response.json();

//     const data = parsedData.data;

//     const currentDateTime = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
//     const currentHour = new Date( currentDateTime).getHours();
//     const indexofNextHour = data.findIndex(date => {
        
//     })
// }

// export default getHourlyForecast;