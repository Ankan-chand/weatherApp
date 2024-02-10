import React,{useEffect, useState} from 'react'
import './Header.css'
import { IoSearch } from "react-icons/io5";

export default function Header({data,city,setCity}) {

  const [cityName,setCityName]=useState();

  // {main, icon, temp, feels_like, humidity, speed}
  const {main, img, temp, feels_like, humidity, speed}=data;

  const [status,setStatus]=useState(main);
  const [image,setImage]=useState(img);
  const [temperature,setTemperature]=useState(temp);
  const [feels,setFeels]=useState(feels_like);
  const [humid,setHumid]=useState(humidity);
  const [windSpeed,setWindSpeed]=useState(speed);

  const getDate=()=>{
    let date=new Date();
    return date.toLocaleDateString()+" "+date.getUTCHours()+":"+date.getMinutes();
  }

  const setInput=(e)=>{
    setCityName(e.target.value);
  }
  const setCityValue=()=>{
    setCity(cityName)
  }

  useEffect(()=>{
    setStatus(main);setImage(img);setFeels(feels_like);
    setTemperature(temp);setHumid(humidity);setWindSpeed(speed);
    console.log(image);
  },[data])

  return (
  
    <div className='header'>
      <div className='title'>
        <h4>{getDate()}</h4>
        <div className='search'>
            <input type="text" onChange={setInput} placeholder='Enter City.....' />  
            <IoSearch onClick={setCityValue} className='icon'/>
        </div>
      </div> 
      <div className="dataBox">
        <div className="box">
          <div><b>{status}</b></div>
          <div><img src={image} alt="" /></div>
        </div>
        <div className="box">
          <div><b>{city}</b></div>
          <div>{temperature}</div>
        </div>
        <div className="box">
          <div><b>Felt : </b>{feels}</div>
          <div><b>Humidity :</b> {humid}</div>
          <div><b>Speed :</b> {speed}</div>
        </div>
      </div>

    </div>
  )
}
