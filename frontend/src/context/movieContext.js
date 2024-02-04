import { useState, useContext, createContext } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    return (
      <MovieContext.Provider value={[articles, setArticles]}>
        {children}
      </MovieContext.Provider>
    );
  };
  const useMovie = () => useContext(MovieContext);
export { useMovie, MovieProvider };