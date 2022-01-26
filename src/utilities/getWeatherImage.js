import { convertTimestamp } from "./convertTimestamp";
import { useSelector } from 'react-redux';

export const GetWeatherImage = () => {
    const reduxData = useSelector((state) => state.weather.data);
    const currentTime = new Date();
    const sunset = convertTimestamp(reduxData.sys.sunrise)
}