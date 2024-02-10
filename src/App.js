import './App.css';
import {useState} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { getWeatherForecast } from './Apis/getWeatherForecast';
import { useEffect } from 'react';


function App() {

  const [data,setData]=useState({});
  const [city,setCity]=useState("Delhi");

  const getData=async(cityName)=>{
    const data=await getWeatherForecast(cityName);
    setData(data);
    setCity(cityName);
  }


  useEffect(()=>{
    getData(city);
  },[city])

  return (
    <>
    
    <div className="App">
     <Header data={data} city={city} setCity={setCity}/>
     <Main/>
     <Footer/>

    </div>
    </>
  );
}

export default App;
