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
  const nav = ["Home", "New & Popular", "Kids", "Theatre", "Comedy",'Drama'];

  useEffect(() => {
     fetch(API_URL).then((res)=>res.json()).then(data=>{
       console.log(data.results);
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e)=>{
    e.preventDefault();
    // console.log('search');
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

  const getData =async (movieType) =>{
    if (movieType == "New & Popular") {
     const url = "https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&api_key=1b5e513d42c3d7aa380a26389636467f"
     const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } if(movieType== 'Kids') {
      const url = "https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=1b5e513d42c3d7aa380a26389636467f"
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } if(movieType=='Theatre'){
      const url = "https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=1b5e513d42c3d7aa380a26389636467f"
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } if(movieType=='Home'){
      const url = "https://api.themoviedb.org/3/movie/popular?api_key=1b5e513d42c3d7aa380a26389636467f"
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } if(movieType=='Comedy'){
      const url = "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=1b5e513d42c3d7aa380a26389636467f"
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    } if (movieType== 'Drama') {
      const url = "https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=1b5e513d42c3d7aa380a26389636467f"
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setMovies(data.results);
    }

  }
  return (
    <>
    <header>
      <div className="big-search">
        <ul>
          {nav.map((x) => {
            return (
              <li>
                <a name={x} onClick={(e) => getData(e.target.name)}>
                    {x}
                  </a>
              </li>
            );
          })}
        </ul>
        
        <Form className="d-flex mt-3 me-4" onSubmit={searchMovie} >
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
