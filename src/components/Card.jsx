const Card = () => {
    const imageList={"01d":"/images/clear.png","02d":"/images/sunny1.png","03d":"/images/sunny.png","04d":"/images/cloudy.png","09d":"/images/drizzle.png","10d":"/images/cloudy_rainy.png","11d":"/images/thunder.png","01n":"/images/clear_n.png","02n":"/images/night.png","03n":"/images/night.png","04n":"/images/cloudy_night.png","09n":"/images/rainy_night.png","10n":"/images/rainy_night.png","11n":"/images/rainy_night.png","50d":"/images/sunny.png","50n":"/images/night.png"}
    const func = async () => {
        const city = document.getElementsByClassName("inputField");
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${process.env.REACT_APP_API_KEY}`
        let res = await fetch(url)
        let data = await res.json()
        console.log(data)
        const place=document.getElementsByClassName("place")
        const temp=document.getElementsByClassName("temp")
        const humidity=document.getElementsByClassName("humidity")
        const windSpeed=document.getElementsByClassName("wind-speed")
        document.getElementById("sky").src=imageList[data.weather[0].icon]

        const tempNew=parseInt(Number(data.main.temp)).toString()
        place[0].innerHTML=data.name
        temp[0].innerHTML=tempNew+`<sup>o</sup>`
        humidity[0].innerHTML=data.main.humidity+" %"
        windSpeed[0].innerHTML=data.wind.speed+" km/h"
    }
    return (
        <div className="card-main">
            <div className="search-box">
                <input placeholder="Enter a place" className="inputField"></input>
                <button onClick={()=>{func()}}><img src="/images/search.png"></img></button>
            </div>
            <p className="place">London</p>
            <h1 className="temp">28<sup>o</sup></h1>
            <img src="/images/sunny.png" id="sky"></img>
            <div className="details">
                <div className="box">
                    <img src="/images/humidity.png"></img>
                    <div className="content">
                    <p className="humidity">64%</p>
                    <p>Humidity</p>
                    </div>
                </div>
                <div className="box">
                    <img src="/images/wind.png"></img>
                    <div className="content">
                    <p className="wind-speed">12 km/h</p>
                    <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;