import React, { useState } from "react";
import axios from "axios";

import { useMovie } from "../context/movieContext";

const CreateMovie = () => {
  const [articles, setArticles] = useMovie();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    try {
      console.log(id);
      const response = await axios.post(
        "http://localhost:8000/api/movies/add",
        {
          id,
          name,
          director,
          releaseYear: year,
          language,
          rating,
          imagePath: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = await axios.get("http://localhost:8000/api/movies");

      setArticles(result.data);
      setName("")
      setId("")
      setDirector("")
      setLanguage("")
      setRating("")
      setImage("")
      setYear("")
    } catch (error) {
      console.log("my error", error);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-light bg-transparent text-white border border-0"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@getbootstrap"
      >
        Add Movie
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content text-white custAdd">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new movie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Movie Id:
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    id="recipient-name"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Movie Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Director:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Release Year:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Language:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Rating:
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    id="recipient-name"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Image Link:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark border border-white custSearchBtn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark border border-white custSearchBtn"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
