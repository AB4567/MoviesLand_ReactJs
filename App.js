import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
//b9195883
//http://www.omdbapi.com?apikey=b6003d8a
const API_url = 'http://www.omdbapi.com?apikey=b9195883'

const Movie1 = 
    {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "N/A"
    }
//Checking 123

const App = () =>{

const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState([]);

const searchMovies = async (title) => {
    const response = await fetch(`${API_url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
}

    useEffect(() => {
    
        searchMovies('Spiderman');

    },[]);
    
return (
    
  <div className='app'>
    <h1>Movie Land</h1>
    <div className="search">

        <input
        placeholder="Search for movies"
        value = {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
        />

    </div>
    {
        movies?.length > 0 
        ? (
            <div className="container">   
           
            {movies.map((movie) => (
                <MovieCard movie={movie} />

            ))}
             </div>
        )
        : (
            <div className="empty">   
            <h2>No movies found.</h2>
             </div>
        )


    }

   

  </div>



    ); 
}

export default App;