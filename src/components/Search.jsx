import { useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSearch } from "../features/resultSlice";

export const Search = () => {
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
        dispatch(changeSearch(location));
    }

    return (
        <form onSubmit={submitSearch}>
            <div className="Align-Right">
                <button disabled={!location} id="Search" onClick={onSubmit} >Search</button>
            </div>
            <input 
                type="search"
                name="q" 
                aria-label="Search for a town" 
                placeholder='Enter Town Name Here' 
                required 
                value={location} onChange={handleChange}></input>
            
        </form>
    )
}