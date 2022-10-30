import './App.css';
import React,{useState} from 'react'
import axios from 'axios';
import Card from './card'



function App() {

const [data,setData]=useState({});
const [location, setLocation]=useState('');
const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0a8e530afca628f9d4731218c2c7da64`;

const searchLocation = (event) => {
  if (event.key === 'Enter')
  {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
  })
  }

}

const tempData={
  cityName:data.name,
  cityTemp:data?.main?.temp,
  Country:data?.sys?.country,
  weatherIcon: data?.weather && data?.weather[0]?.icon


          }


  return (
    <div className="app">

      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter City Name"
        type="text"/>

      </div>


      
    


      <div className="container">
        <div className="main">
         
        <Card {...tempData}/>
        
        </div>

      </div>
      

    </div> 
  );

}


export default App;
