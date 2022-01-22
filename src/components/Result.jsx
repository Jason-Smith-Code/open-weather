import React, { useEffect, useState } from 'react';
import { convertTimestamp } from '../utilities/convertTimestamp';
import { convertDirection } from '../utilities/convertDirection';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../features/resultSlice';


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

    // useEffect(() => {
    //     setAppState({ loading: true });
    //     const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=amble&appid=9c386e0118890725b196ccbcd09691e5"
    //     fetch(apiUrl)
    //         .then((res) => res.json())
    //         .then((data) => {
    //         setAppState({ loading: false, data: data });
    //         });
    // }, [setAppState]);

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=amble&appid=9c386e0118890725b196ccbcd09691e5"
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
            dispatch(addData(data))
            setAppState({ loading: false, data: data });
            });
    }, [setAppState]);

    const dataPresent = appState.data

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     setAppState(e.target.value);
    //     dispatch(addData(appState.data))
    //     console.log("Form submitted")
    // }


    return (
             <div>

            {dataPresent == null ? 
            <p> No data present</p> : 
            <div>
                <p>{appState.data.name}</p>
                <p>{appState.data.weather[0].description}</p>
                <img alt="icon" src={`http://openweathermap.org/img/wn/${appState.data.weather[0].icon}@2x.png`}></img>
                <p>Temperature: {appState.data.main.temp}</p>
                <p>Wind Speed: {appState.data.wind.speed}</p>
                <p>Direction: {convertDirection(appState.data.wind.deg)}</p>
                <p>Sun Rise: {convertTimestamp(appState.data.sys.sunrise)}</p>
                <p>Sun Sets: {convertTimestamp(appState.data.sys.sunset)}</p>
            </div>
            }
        </div>
    )
}