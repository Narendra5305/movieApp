import { useContext } from "react"
import "./movie.css"
import { useNavigate } from "react-router"
import {MovieContext} from "../movieContext/movieContexts"


const MoviePage =() =>{
    const  { movies } = useContext(MovieContext) ;

    const navigate = useNavigate();


    if (movies.length===0){

        return(
            <div className="error-cont">
                <div className="img">
                    <img src="https://global.discourse-cdn.com/sitepoint/original/3X/e/3/e352b26bbfa8b233050087d6cb32667da3ff809c.gif" alt="loader" />
                </div>
            </div>
        )
    }


    const HandleDetailPage = (id) =>{
        navigate(`/movie/${id}`)
    }

    return(
        <div id="movie-cont">
            <div  className="cont">
                {movies.map((ele) =>(
                    <div onClick={()=>{HandleDetailPage(ele._id)}} className="card" key={ele._id}>
                        <img src={ele.image} alt={ele.title} />
                        <h3>{ele.title}</h3>
                        <p>Rating:{ele.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default MoviePage ;



