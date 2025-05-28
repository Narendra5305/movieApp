import "./navbar.css"
import { useState , useContext} from "react";
import {MovieContext} from "../movieContext/movieContexts"
import { useNavigate } from "react-router";

const Navbar  = () =>{
    const [query, setQuery] = useState("");
    const { SearchByTitle } = useContext(MovieContext);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        SearchByTitle(value);
    };

    const handleHomeClick =() =>{
        navigate("/")
    }

    return(
        <nav id="navbar">
            <div className="navcont">
                <div  onClick={()=>handleHomeClick()} className="navbar-cont-1">
                    <h1>Movie Listing App</h1>
                </div>
                <div className="navbar-cont-2">
                    <input type="text" placeholder="Search movies by title..." value={query} onChange={handleInputChange}  />
                </div>

            </div>
        </nav>
    )
}


export default Navbar