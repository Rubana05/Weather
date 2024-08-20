import React from 'react';
import axios from 'axios';
import './App.css'
import { useState } from 'react';
/*image*/
import searchIcon from './Assets/searchicon1.png';

function App(){
  const [first, setfirst] = useState([])
const data=()=>
{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9a44e3d1989428622789a76938893be2`)
  .then((res)=>setfirst(res.data.main))
  .catch((error)=>console.log(error))
}
console.log(first)
const [city, cityvalue] = useState('')
console.log(city)

return (
<div className='container'> 
  <div className='input-container'>
    <input type='text' className='cityInput' placeholder='Search....' value={city}  onChange={(e)=>cityvalue(e.target.value)} />
    <div className='SearchIcon' >
      <img src={searchIcon}alt='search' className='image'  onClick={data}/ >
    </div>
    
    
  </div>
<br></br>
<br></br>
<br></br>
<div className='text'>
  <h1><b className='b'>Temperature:</b>{first.temp} <sup>0</sup>C</h1>
  <h1><b className='b'>Humidity:</b>{first.humidity} %</h1>
  <h1><b className='b'>Pressure:</b>{first.pressure} </h1>
  <h1><b className='b'>Sea Level:</b>{first.sea_level}</h1>
  <h1><b className='b'>Feels Like:</b>{first.feels_like}</h1>
</div>
</div>
  );

}

export default App;
