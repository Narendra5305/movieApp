import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState(null);
  const BASE_URL = "https://movielistbackend-ej6m.onrender.com/movie"; 

  
  const fetchMovies = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/`);
      setMovies(res.data.data);
    } catch (error) {
      console.error("Failed to fetch movies", error);
    }
  };

  
  
    const fetchMovieDetail = async (id) => {
        try {
        const res = await axios.get(`${BASE_URL}/${id}`);
        setMovieDetail(res.data.data);
        } catch (error) {
        console.error("Failed to fetch movie detail:", error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

  return (
    <MovieContext.Provider value={{ movies, movieDetail, fetchMovieDetail }}>
      {children}
    </MovieContext.Provider>
  );
};

