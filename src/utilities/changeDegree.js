import { useSelector } from "react-redux";

export const ChangeDegree = () => {
    const currentUnit = useSelector((state) => state.weather.unit);

    const elements = document.getElementsByClassName('degrees');
    for (let i = 0; i < elements.length; i++) {
        if (currentUnit === 'metric') {
            elements[i].innerHTML = "&#8451;";
        } else if (currentUnit === 'imperial') {
            elements[i].innerHTML = "&#8457;";
        }
    }
}  