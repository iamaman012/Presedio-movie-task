import "./App.css";
import Landing from "./components/Landing.js";
import Maincontainer from "./components/Maincontainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/movieContext.js";
import UpdateMovie from "./components/UpdateMovie.js";
// import UpdateMovie from "./pages/updateMovie.js";
// import UpdateMovie from './components/UpdateMovie.js';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Landing>
            <Routes>
              <Route path="/" element={<Maincontainer />} />
              <Route path="/update/:id" element={<UpdateMovie />} />
            </Routes>
          </Landing>
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
