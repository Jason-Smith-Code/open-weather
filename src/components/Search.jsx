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
            <input type="search" name="q" aria-label="Search for a town" placeholder='Town Name' value={location} onChange={handleChange}></input>
            <button onClick={onSubmit} >Search</button>
        </form>
    )
}