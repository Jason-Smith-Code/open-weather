import { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSearch } from "../features/resultSlice";

export const Search = () => {
    // const reduxSearch = useSelector((state) => state.weather.search);

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');

    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const submitSearch = (e) => {
        dispatch(changeSearch(e))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLocation(e.target.value);
        dispatch(changeSearch(location))
        console.log(location)
        console.log("Form submitted")
    }

    return (
        <form onSubmit={submitSearch}>
            <div className="Align-Right">
                <button id="Search" onClick={onSubmit} >Search</button>
            </div>
            <input type="search" name="q" aria-label="Search for a town" placeholder='Enter Town Name Here' value={location} onChange={handleChange}></input>
            
        </form>
    )
}