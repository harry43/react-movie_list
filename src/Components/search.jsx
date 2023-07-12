import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Search = () => {
    const {searchParam, handleOnChange, handleSubmit} = useContext(GlobalContext)
    return(
        <div>
            <input name="search" placeholder="Search Movie Here" value={searchParam} onChange={handleOnChange} />
            <button disabled={searchParam.trim().length < 3} onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default Search;