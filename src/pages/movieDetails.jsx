import React, { useEffect ,useContext} from "react";
import {MovieContext} from "../movieContext/movieContexts"
import { useParams } from "react-router-dom";



const MovieDetail = () =>{
    const { id } = useParams();
    const { movieDetail, fetchMovieDetail } = useContext(MovieContext);

    useEffect(() => {
        fetchMovieDetail(id);
    }, [id]);

    if (!movieDetail){

        return(
            <div className="error-cont">
                <div className="img">
                    <img src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif" alt="loader" />
                </div>
            </div>
        )
    }


    return(
        <div id="movieDetails-cont">
            <div className="movie-cont">
                <div className="movie-cont-1">
                    <img src={movieDetail.image} alt="movie image" />
                </div>
                <div className="movie-cont-2">
                    <h3>{movieDetail.title}</h3>
                    <p>Rating:{movieDetail.rating}</p>
                    <p>{movieDetail.descriptions}</p>

                </div>
            </div>
        </div>
    )
}


export default MovieDetail ;