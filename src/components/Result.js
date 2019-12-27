import React from 'react';
import Paragraph from './Paragraph'

const Result = props => {
    return (
        <Paragraph>
            {props.city && 
                <div>
                    <p>Place: {props.city}, {props.country}</p>
                    <p>Temperature: {props.temp} ˚C</p>
                    <p>Feels like: {props.feels_like} ˚C</p>
                    <p>Pressure: {props.pressure} hPa</p>
                    <p>Humidity: {props.humidity} %</p>
                </div>
             }
        </Paragraph>
    )
}

export default Result;