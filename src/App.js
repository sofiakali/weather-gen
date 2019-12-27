import React, {Component} from 'react';
import Title from './components/Title'
import Search from './components/Search'
import Result from './components/Result'
import Wrapper from './components/Wrapper';

const API_KEY = 'cf8506ee0a1d454bfbf4becd473a089d';

class App extends Component {

    state = {
        city: undefined,
        country: undefined,
        temp: undefined,
        feels_like: undefined,
        pressure: undefined,
        humidity: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const API_URL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await API_URL.json();

        this.setState({
           city: data.name,
           country: data.sys.country,
           temp: data.main.temp,
           feels_like: data.main.feels_like,
           pressure: data.main.pressure,
           humidity: data.main.humidity,
           sunrise: data.sys.sunrise,
           sunset: data.sys.sunset
        });
    }

    render() {
        return (
          <Wrapper>
            <Title>Weather in your city</Title>
            <Search weatherMethod={this.getWeather} />
            <Result
              city={this.state.city}
              country={this.state.country}
              temp={this.state.temp}
              feels_like={this.state.feels_like}
              pressure={this.state.pressure}
              humidity={this.state.humidity}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
            />
          </Wrapper>
        );
    }
}

export default App;