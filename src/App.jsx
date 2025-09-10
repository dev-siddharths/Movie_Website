import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Taken from "./assets/Taken.jpeg";
import Gladitorimg from "./assets/gladiator.jpeg";
import Map_Practice from "./Components/Map_Practice.jsx";
import axios from "axios";

function App() {
  const [Movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const Api_Read_Acess_Token = import.meta.env.VITE_Movie_Access_Token;
  const apiCalling = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${Api_Read_Acess_Token}`,
            Accept: "application/json",
          },
        }
      );
      console.log(res.data?.results);
      setMovies(res.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  // apiCalling();

  return (
    <>
      {/* <Map_Practice /> */}
      <div className="pageLayout">
        <div className="sideBanner leftbanner">
          <b>
            <span style={{ textAlign: "center" }}>Top 5 Movies this week</span>
          </b>
          <ul>
            <li>1. The Conjuring: Last Rites. 2025</li>
            <li>2. The Thursday Murder Club. 2025</li>
            <li>3. Highest 2 Lowest. 2025</li>
            <li>4. Weapons. 2025</li>
            <li>5. Wuthering Heights. 2026</li>
          </ul>
        </div>

        <div className="mainContent">
          <div className="navbar">
            <ul>
              <span>Movie Search</span>
              <li>Login</li>
              <li>Signup</li>
            </ul>
          </div>
          <div className="searchbar">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search for a Movie"
              onKeyUp={(e) => {
                setQuery(e.target.value);
              }}
            />
            <button onClick={apiCalling}>Search</button>
          </div>
          <h1 style={{ textAlign: "center" }}>Popular Movies</h1>

          <div className="containerFather">
            <div className="container">
              {Movies.map((value, index) => {
                return (
                  <div className="items items1" key={index}>
                    <div className="card1">
                      <img
                        src={`https://image.tmdb.org/t/p/w185${value.poster_path}`}
                        alt=""
                        id="fi"
                      />
                      <br />
                      <span>{value.original_title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sideBanner rightbanner">
          <b>
            <span style={{ textAlign: "center" }}>
              Top 5 Web Series this week
            </span>
          </b>
          <ul>
            <li>1. Breaking Bad</li>
            <li>2. Black Mirror</li>
            <li>3. Walking Dead</li>
            <li>4. Stranger Things</li>
            <li>5. Seinfield</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
