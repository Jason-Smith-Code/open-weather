import { useSelector } from "react-redux";

export const ChangeDegree = () => {
    const currentUnit = useSelector((state) => state.weather.unit);

    const elements = document.getElementsByClassName('degrees');
    let l = elements.length;
    console.log("changing Degree")
    for (let i = 0; i < l; i++) {
        if (currentUnit === 'metric') {
            elements[i].innerHTML = "&#8451;";
        } else if (currentUnit === 'imperial') {
            elements[i].innerHTML = "&#8457;";
        }
    }
}  