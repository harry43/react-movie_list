import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
    const { movieList, loading } = useContext(GlobalContext)
    console.log(movieList)
    console.log(loading)
    return (
        <div>
            {
                loading && <span>Loading! Please wait</span>
            }
            {
                movieList && movieList.length > 0 ?
                    movieList.map((item) => (
                        <div key={item.imdbID}>
                            <img src={item.Poster} alt="Movie Poster" />
                            <p>{item.Title}</p>
                            <p>{item.Year}</p>
                        </div>
                    )) : "No Movies"
            }

        </div>
    )
}

export default MovieList;