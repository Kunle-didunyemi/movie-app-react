import { useState, useEffect } from "react";
import MovieBox from './components/MovieBox';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './App.css';

let API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1b5e513d42c3d7aa380a26389636467f";
function App() {
  const [movies,setMovies]= useState([]);
  const nav = ["Home", "New & Popular", "Kids", "Theatre", "Comedy"];

  useEffect(() => {
     fetch(API_URL).then((res)=>res.json()).then(data=>{
      console.log(data.results);
      setMovies(data.results);
    })
  }, [])
  
  return (
    <>
    <header>
      <div className="big-search">
        <ul>
          {nav.map((x) => {
            return (
              <li>
                <a name={x} >
                    {x}
                  </a>
              </li>
            );
          })}
        </ul>
        
          {/* <div  className="searchBox">

            <input onChange={(e)=>{setSearch(e.target.value)}} value={search}
              placeholder="Enter Movie Title" 
              className="search"
              type="search" >
                </input>
            <button onClick={searchMovies}   className="searchIcon">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div> */}
           
       
      </div>
    </header>
    <div className="App">
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>) }
      </div>
  </>
  );
}

export default App;
