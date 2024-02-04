import React, { useEffect } from "react";
import SlindingBar from "./SlindingBar";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useMovie } from "../context/movieContext";

const Maincontainer = (props) => {
  const [articles, setArticles] = useMovie();

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/movies");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    setArticles(articles);
  }, [articles]);

  return (
    <div className="main-container">
      <div className="sliding">
        <SlindingBar />
      </div>
      {articles.languageCount >= 0 ? (
        <div className="text-center text-white fw-bold fs-5 mb-5">
          Total Movies : {articles.languageCount}
        </div>
      ) : (
        <></>
      )}
      <div className="movies">
        <div className="row">
          {articles.movies && articles.movies.length > 0 ? (
            articles.movies.map((movie) => {
              return (
                <div
                  className="col flex flex-start"
                  style={{
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    marginBottom: "20px",
                  }}
                  key={movie.id} // Add a unique key for each movie
                >
                  <MovieCard
                    id={movie.id}
                    name={movie.name}
                    director={movie.director}
                    language={movie.language}
                    releaseYear={movie.releaseYear}
                    rating={movie.rating}
                    image={movie.imagePath}
                  />
                </div>
              );
            })
          ) : (
            <h1 className="text-center text-white"> No Movies Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maincontainer;
