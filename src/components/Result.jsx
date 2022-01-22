import React, { useEffect, useState } from 'react';
import { convertTimestamp } from '../utilities/convertTimestamp';
import { convertDirection } from '../utilities/convertDirection';
import { useSelector, useDispatch } from 'react-redux';
import { addData, loadingData, stopLoadingData} from '../features/resultSlice';


export const Result = () => {
    //const currentData = useSelector((state) => state.weather.data);
    //const currentLoad = useSelector((state) => state.weather.data);
    const loading = useSelector((state) => state.weather.loading);
    //const location = useSelector((state) => state.weather.location);
    //const unit = useSelector((state) => state.weather.unit);
    const reduxData = useSelector((state) => state.weather.data);

    console.log(`loading: ${loading}`)

    const dispatch = useDispatch();

    const [appState, setAppState] = useState({
        loading: false,
        data: null,
    });

    useEffect(() => {
        dispatch(loadingData());
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=amble&appid=9c386e0118890725b196ccbcd09691e5"
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
            dispatch(addData(data));
            setAppState({ loading: false, data: data });
            dispatch(stopLoadingData());
            });
    }, [setAppState]);

    const dataPresent = appState.data; // Change this to check the redux state of data instead

    return (
             <div>
                 <p></p>
            {dataPresent == null ? 
            <p> No data present</p> : 
            <div>
                <p>{reduxData[0].name}</p>
                <p>{reduxData[0].weather[0].description}</p>
                <img alt="icon" src={`http://openweathermap.org/img/wn/${reduxData[0].weather[0].icon}@2x.png`}></img>
                <p>Temperature: {reduxData[0].main.temp}</p>
                <p>Wind Speed: {reduxData[0].wind.speed}</p>
                <p>Direction: {convertDirection(reduxData[0].wind.deg)}</p>
                <p>Sun Rise: {convertTimestamp(reduxData[0].sys.sunrise)}</p>
                <p>Sun Sets: {convertTimestamp(reduxData[0].sys.sunset)}</p>
            </div>
            }
        </div>
    )
}