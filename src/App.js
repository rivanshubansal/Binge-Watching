import React, { useState } from "react";
import "./styles.css";

const movieCollection = {
  MoviesRomantic: [
    {
      name: "Titanic",
      rating: "Imdb: 7.8"
    },

    {
      name: "The Notebook",
      rating: "Imdb: 6.8"
    },

    {
      name: "Kabir Singh",
      rating: "Imdb: 7.1"
    },
    {
      name: "After We Collided",
      rating: "Imdb: 5"
    }
  ],
  MoviesThrillerMystery: [
    {
      name: "Shutter Island",
      rating: "Imdb: 8.2"
    },
    {
      name: "John-Wick",
      rating: "Imdb: 7.4"
    },
    {
      name: "6 Underground",
      rating: "Imdb: 6.1"
    },
    {
      name: "Baby Driver",
      rating: "Imdb: 7.6"
    }
  ],
  MoviesSciFi: [
    {
      name: "Interstellar",
      rating: "Imdb: 8.6"
    },
    {
      name: "Inception",
      rating: "Imdb: 8.8"
    },
    {
      name: "Gravity",
      rating: "Imdb: 7.7"
    },
    {
      name: "The Martin",
      rating: "Imdb: 8"
    }
  ],
  WebSeries: [
    {
      name: "Game Of Thrones",
      rating: "Imdb: 9.3"
    },
    {
      name: "Money Heist",
      rating: "Imdb: 8.3"
    },
    {
      name: "Chernobyl",
      rating: "Imdb: 9.4"
    },
    {
      name: "Mirzapur",
      rating: "Imdb: 8.4"
    }
  ]
};

var moviesDictionary = Object.keys(movieCollection);
export default function App() {
  const [selectgenre, setSelectgenre] = useState("MoviesRomantic");

  function genreClickHandler(genre) {
    setSelectgenre(genre);
  }

  return (
    <div className="App">
      <h1>Binge-Watching🎬🍿🍿</h1>
      <div>Want to see lot of movies but don't have recommedations??</div>
      <div style={{ fontWeight: "bold", padding: "1rem" }}>
        {" "}
        Here are some of my favourites..
      </div>
      <div>Select genre you wanna see 👇</div>

      <div>
        {moviesDictionary.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.4rem",
              padding: "0.5rem  0.8rem",
              border: "2px solid black",
              margin: "2rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ marginLeft: "38%" }}>
          {movieCollection[selectgenre].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1.2rem",
                border: "2px solid #D1D5DB",
                width: "35%",
                margin: ".8rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item.name} </div>
              <div style={{ fontSize: "smaller" }}> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ fontWeight: "bold" }}> By Rivanshu Bansal</div>
    </div>
  );
}
