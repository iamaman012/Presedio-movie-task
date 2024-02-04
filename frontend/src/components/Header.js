import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useMovie } from "../context/movieContext";
import CreateMovie from "./CreateMovie";
const Header = () => {
  const [articles, setArticles] = useMovie();
  const [search, setSearch] = useState("");
  const handleLanguage = async (data) => {
    const response = await axios.get(
      `http://localhost:8000/api/movies/filter?language=${data}`
    );
    setArticles(response.data);
  };
  const handleHome = async () => {
    const response = await axios.get("http://localhost:8000/api/movies");
    setArticles(response.data);
  };

  const handleYear = async (data) => {
    const response = await axios.get(
      `http://localhost:8000/api/movies/filter?releaseYear=${data}`
    );
    setArticles(response.data);
  };
  const handleRating = async (data) => {
    const response = await axios.get(
      `http://localhost:8000/api/movies/filter?rating=${data}`
    );
    setArticles(response.data);
  };
  const handleDirector = async (data) => {
    const response = await axios.get(
      `http://localhost:8000/api/movies/filter?director=${data}`
    );
    setArticles(response.data);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log(search);
      const response = await axios.get(
        `http://localhost:8000/api/movies/search?name=${search}`
      );
      console.log(response.data);
      setArticles(response.data);
      setSearch("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black cusNav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={handleHome}>
            MovieApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Director
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDirector("peter")}
                    >
                      Peter
                    </button>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => handleDirector("Rajkumar")}
                    >
                      Rajkumar
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => handleDirector("Robert")}
                    >
                      Robert
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Language
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguage("hindi")}
                    >
                      Hindi
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguage("english")}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguage("japanese")}
                    >
                      Japanese
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguage("korean")}
                    >
                      Korean
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleLanguage("french")}
                    >
                      French
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Year
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleYear("2000,2010");
                      }}
                    >
                      2000-2010
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleYear("2010,2020");
                      }}
                    >
                      2010-2020
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleYear("2020,2024");
                      }}
                    >
                      2020-2024
                    </button>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown pe-3">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Select Rating
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleRating("0,3");
                      }}
                    >
                      0-3
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleRating("4,7");
                      }}
                    >
                      4-7
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => {
                        handleRating("7,10");
                      }}
                    >
                      7-10
                    </button>
                  </li>
                </ul>
              </li>
              <CreateMovie />
            </ul>
            <form className="d-flex" method="get">
              <input
                className="form-control me-2 bg-dark custSearch text-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-dark border border-white custSearchBtn"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
