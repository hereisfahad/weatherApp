import React, { Component } from "react";
import { ReactComponent as Pin } from "./location.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      humd: "",
      image: "",
      loc: "",
      error: ""
    };
  }
  handleClick = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&apikey=dbd802d470137cd4c005f9625b564ea2`
      );
      const data = await api_call.json();
      this.setState({
        temp: data.main.temp,
        humd: data.main.humidity,
        image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
        loc: data.name,
        error: ""
      });
    } catch (error) {
      this.setState({
        temp: "",
        humd: "",
        image: "",
        loc: "",
        error: "Please enter the correct city and country names"
      });
    }
  };
  getGeo = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&apikey=dbd802d470137cd4c005f9625b564ea2`
        )
          .then(data => data.json())
          .then(data => {
            this.setState({
              temp: data.main.temp,
              humd: data.main.humidity,
              image: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
              loc: data.name,
              error: ""
            });
          });
      });
    } else {
      alert("Sorry, browser does not support geolocation!");
    }
  };
  render() {
    const { image, loc, temp, humd, error } = this.state;
    return (
      <div className="container">
        <center>
          <div className="card" id="card1">
            <span id="title">Weather</span>

            <form onSubmit={this.handleClick}>
              <input
                type="text"
                placeholder="city"
                name="city"
                className="form-control"
              />{" "}
              <br></br>
              <br></br>
              <input
                type="text"
                placeholder="country"
                name="country"
                className="form-control"
              />{" "}
              <br></br>
              <br></br>
              <button className="btn"> Get Weather </button>
            </form>
            <Pin
              style={{
                height: "100%",
                width: "75px",
                padding: "12px 0px"
              }}
              onClick={this.getGeo}
            />
            <span id="error">{error !== "" ? <h1>Error:{error}</h1> : ""}</span>
          </div>
          {image !== "" ? (
            <div className="card" id="res">
              {image !== "" ? (
                <img
                  src={image}
                  width="100px"
                  height="100px"
                  alt="weather icon"
                ></img>
              ) : (
                ""
              )}
              {loc !== "" ? <h1>City: {loc}</h1> : ""}
              {temp !== "" ? <h1>Temp: {temp}</h1> : ""}
              {humd !== "" ? <h1>Humidity: {humd}</h1> : ""}
            </div>
          ) : (
            ""
          )}
        </center>
      </div>
    );
  }
}

export default App;
