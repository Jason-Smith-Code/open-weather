import { useDispatch, useSelector } from "react-redux"
import { changeUnitTypeToMetric, changeUnitTypeToImperial } from "../features/resultSlice";

export const MeasurementTypeToggle = () => {
    const unit = useSelector((state) => state.weather.unit);

    const dispatch = useDispatch();

    const changeToMetric = () => {
        dispatch(changeUnitTypeToMetric());
    }

    const changeToImperial = () => {
        dispatch(changeUnitTypeToImperial());
    }

    return(
        <div id="UnitTypeButtonsContainer">
            <button className={unit === "metric" ? "Border" : "NoBorder"} id="MetricButton" onClick={changeToMetric}>Metric</button>
            <button className={unit === "imperial" ? "Border" : "NoBorder"} id="ImperialButton" onClick={changeToImperial}>Imperial</button>
        </div>
    )
}