const Card = (props) => {
    return ( 


        
        <div className="card">
          
          <div className="location">
            <p className="bold">{props.cityName}</p>
          </div>

          <div className="country">
            {props.Country}
            </div>

          <div className="temp">
            <h1>{Math.trunc((props.cityTemp)-273.15)}</h1>
            </div>

          <div className="wIcon">
                <img src={`http://openweathermap.org/img/w/${props.weatherIcon}.png`} alt=""/>
          </div>


            </div>

     );
}
export default Card;