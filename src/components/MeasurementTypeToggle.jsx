import { useDispatch } from "react-redux"
import { changeUnitTypeToMetric, changeUnitTypeToImperial } from "../features/resultSlice";
import { useEffect } from "react";

export const MeasurementTypeToggle = () => {
    const dispatch = useDispatch();

    const changeToMetric = () => {
        dispatch(changeUnitTypeToMetric());
        console.log("Changed to metric")
    }

    const changeToImperial = () => {
        dispatch(changeUnitTypeToImperial());
        console.log("Changed to Imperial")
    }

    useEffect(() =>{
        console.log("The effect has been used")
    },[])

    return(
        <div>
            <button id="metric" onClick={changeToMetric}>Metric</button>
            <button id="imperial" onClick={changeToImperial}>Imperial</button>
        </div>
    )
}