import React, { useEffect } from 'react';
import { convertTimestamp } from '../utilities/convertTimestamp';
import { convertDirection } from '../utilities/convertDirection';
import { useSelector, useDispatch } from 'react-redux';
import { addData, loadingData, stopLoadingData, applyError, removeError} from '../features/resultSlice';


export const Result = () => {
    const unit = useSelector((state) => state.weather.unit);
    const reduxData = useSelector((state) => state.weather.data);
    const search = useSelector((state) => state.weather.search);
    const containsError = useSelector((state) => state.weather.hasError);
    const dispatch = useDispatch();

    const key = "9c386e0118890725b196ccbcd09691e5";

    useEffect(() => {
        dispatch(loadingData());
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&appid=${key}`;
        fetch(apiUrl).then((res) => {
            if (res.ok) {
                dispatch(removeError())
              return res.json();
            } else {
                dispatch(applyError())
              throw new Error('Something went wrong');
            }
          })
          .then((data) => {
            dispatch(addData(data));
            dispatch(stopLoadingData());
          })
          .catch((error) => {
            console.log(error)
          });
    }, [unit, search, dispatch ]); 

    return (
        <div>
            {containsError ? <p className="Error-Message">We could not find any data for that location, try again</p> : <p></p>}
            {reduxData.length === 0 ? 
            <p> No data present</p>  :
            <div>
                <p id="LocationName">{reduxData.name}</p>
                <img alt="icon" src={`http://openweathermap.org/img/wn/${reduxData.weather[0].icon}@2x.png`}></img>
                <p id="Description">{reduxData.weather[0].description}</p>
                <p id="Temperature" className={unit === "metric" ? "metric" : "imperial"}>{Math.round(reduxData.main.temp)}</p>
                <p className={unit === "metric" ? "Mph" : "kmph"}>Wind Speed: {Math.round(reduxData.wind.speed)}</p>
                <p>Direction: {convertDirection(reduxData.wind.deg)}</p>
                <p>Sun Rise: {convertTimestamp(reduxData.sys.sunrise)}</p>
                <p>Sun Sets: {convertTimestamp(reduxData.sys.sunset)}</p>
            </div>               
            }
        </div>
    )
}