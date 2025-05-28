import "./navbar.css"
import { useState , useContext , useEffect} from "react";
import {MovieContext} from "../movieContext/movieContexts"
import { useNavigate } from "react-router";

const Navbar  = () =>{
    const [query, setQuery] = useState("");
    const { SearchByTitle, sortByAsc , sortByDesc } = useContext(MovieContext);
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState("asc");

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        SearchByTitle(value);
    };

    const handleHomeClick =() =>{
        navigate("/")
    }

    useEffect(() => {
        if (sortOrder === "asc") {
            sortByAsc(sortOrder);
        } else {
            sortByDesc(sortOrder);
        }
    }, [ sortOrder]);

    return(
        <nav id="navbar">
            <div className="navcont">
                <div  onClick={()=>handleHomeClick()} className="navbar-cont-1">
                    <h1>Movie Listing App</h1>
                </div>
                <div className="navbar-cont-2">
                    <input type="text" placeholder="Search movies by title..." value={query} onChange={handleInputChange}  />
                </div>

                <div className="navbar-cont-3">
                    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Rating Low To High</option>
                        <option value="desc">Rating High To Low</option>
                    </select>
                    <p>Sort By Rating</p>
                </div>


            </div>
        </nav>
    )
}


export default Navbar