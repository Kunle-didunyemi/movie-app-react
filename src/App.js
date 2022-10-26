import { useState, useEffect } from "react";
import MovieBox from './components/MovieBox';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form,FormControl, Button } from 'react-bootstrap';
import './App.css';

let API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1b5e513d42c3d7aa380a26389636467f";

const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=1b5e513d42c3d7aa380a26389636467f&query";

function App() {
  const [movies,setMovies]= useState([]);
  const [query, setQuery]= useState('');
  const nav = ["Home", "New & Popular", "Kids", "Theatre", "Comedy"];

  useEffect(() => {
     fetch(API_URL).then((res)=>res.json()).then(data=>{
      console.log(data.results);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log('search');
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=1b5e513d42c3d7aa380a26389636467f&query=${query}`
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
      setQuery('');
    } catch (e) {
      // console.log(e);
    }
  }
   
  const changeHandler = (e)=>{
    setQuery(e.target.value);
  }
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
        
        <Form className="d-flex" onSubmit={searchMovie} >
          <FormControl
          type= "search" className="me-2" placeholder="Search Movie" aria-label="search" name= "query" value={query} onChange={changeHandler} ></FormControl>
          <Button variant="secondary" type="submit">search</Button>
        </Form>
      </div>
    </header>
    <div>
      {movies.length > 0 ?(<div className="App">
        {movies.map((movieReq)=>
        <MovieBox key={movieReq.id} {...movieReq}/>) }
      </div>):(
        <h2 className="notFound">Sorry!! No Movie Found👵👧👦 </h2>
      )}
    
    </div>
  </>
  );
}

export default App;
