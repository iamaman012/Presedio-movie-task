import React from "react";
import "../css/moviecard.css";
import axios from "axios";
import { useMovie } from "../context/movieContext";
// import UpdateMovie from "./UpdateMovie";a
import { Link } from "react-router-dom";

const MovieCard = ({
  id,
  name,
  director,
  language,
  releaseYear,
  rating,
  image,
}) => {
  const [articles, setArticles] = useMovie();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const result = await axios.delete(`movies/delete/${id}`);
      console.log(result.data);
      const response = await axios.get("movies");
      console.log(response.data.movies);
      setArticles(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
        </div>

        <div className="moviedetails fw-light">
          <p className="text-truncate">Director : {director}</p>
          <p>Language : {language}</p>
          <p>ReleaseYear : {releaseYear}</p>
          <p>Rating : {rating}</p>
        </div>
        <div className="card-body card-body-btn">
          <button
            className="btn btn-dark border border-white custSearchBtn p-1 m-2 pt-0"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <Link
            className="btn btn-dark border border-white custSearchBtn p-1 m-2 pt-0"
            to={`/update/${id}`}
            a
          >
            Update
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
