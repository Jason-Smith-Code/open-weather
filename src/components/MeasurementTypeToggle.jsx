import { useDispatch } from "react-redux"
import { changeUnitTypeToMetric, changeUnitTypeToImperial } from "../features/resultSlice";
import { useEffect } from "react";

export const MeasurementTypeToggle = () => {
    const dispatch = useDispatch();

    const changeToMetric = () => {
        dispatch(changeUnitTypeToMetric());
    }

    const changeToImperial = () => {
        dispatch(changeUnitTypeToImperial());
    }

    useEffect(() =>{
        console.log("The effect has been used")
    },[])

    return(
        <div id="UnitTypeButtonsContainer">
            <button id="MetricButton" onClick={changeToMetric}>Metric</button>
            <button id="ImperialButton" onClick={changeToImperial}>Imperial</button>
        </div>
    )
}