import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        temp: '',
        humd: '',
        image:'',
        loc:'',
        error:''
    }
    handleClick = async (e) => {
        e.preventDefault();
//        console.log(e.target.elements.city.value)
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        try{
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&apikey=dbd802d470137cd4c005f9625b564ea2`);
            const data = await api_call.json();
             this.setState({
                temp: data.main.temp,
                humd: data.main.humidity,          
                image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                loc: data.name,
                error: ''   
            })
        }catch(error){
            this.setState({
                temp: '',
                humd: '',
                image:'',
                loc:'',
                error: 'Please enter the correct city and country names'
            })
    }
//        console.log(data);
//        console.log(data.weather[0].icon);
//        console.log(this.state.image);
      }
  render() {
    const { image, loc, temp, humd, error } = this.state;
    return (
      <div className="container">
        <center>
            <div className ="card" id="card1">

                <span id = "title">Weather</span>

                <form onSubmit = {this.handleClick} >
                    <input type="text" placeholder="city"  name ="city" className = "form-control"/> <br></br><br></br>
                    <input type="text" placeholder="country"  name ="country" className = "form-control"/> <br></br><br></br>
                    <button className = "btn" > Get Weather </button>
                </form>
                <span id= "error">{error!==''?<h1>Error:{error}</h1>:''}</span>
            </div>
            {
              image!==''
              ?
              <div className="card" id ="res">
                    {image!==''?<img src ={image} width = "100px" height = "100px" alt = "weather icon"></img>:''}
                    {loc!==''?<h1>City: {loc}</h1>:''}
                    {temp!==''?<h1>Temp: {temp}</h1>:''}
                    {humd!==''?<h1>Humidity: {humd}</h1>:''}
              </div>
              : ''
            }

        </center>
      </div>
    );
  }
}

export default App;