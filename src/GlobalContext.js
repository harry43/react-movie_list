import { Children, createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    searchParam: "",
    handleOnChange: () => { },
    handleSubmit: () => { },
    movieList: [],
    loading: false
})

const GlobalState = ({ children }) => {

    const [searchParam, setSearchParam] = useState("")
    const [movieList, setMovieList] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setMovieList(null)
        const getDataFromLocalStorage = JSON.parse(localStorage.getItem("movieList"));
        if (getDataFromLocalStorage && getDataFromLocalStorage.length > 0) {
            setMovieList(getDataFromLocalStorage)
        }
    }, [])

    const handleOnChange = (event) => {
        setSearchParam(event.target.value)
    }

    const handleSubmit = async () => {
        setLoading(true)
        const response = await fetch(`http://www.omdbapi.com/?s=${searchParam}&apikey=1ebeb772`);
        const data = await response.json();

        if (data) {
            setMovieList(data.Search)
            localStorage.setItem("movieList", JSON.stringify(data.Search))
            setLoading(false)
            setSearchParam("")
        }
    }
    const contextValue = {
        searchParam,
        handleOnChange,
        handleSubmit,
        movieList,
        loading
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;