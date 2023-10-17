import { Route, Routes, BrowserRouter } from "react-router-dom";
import { DataContext } from "./assets/context/DataContext";

import Index from "./assets/pages/Index";
import ViewMovie from "./assets/pages/ViewMovie";
import SearchMovies from "./assets/pages/SearchMovies";
import { useEffect } from "react";
import { useContext } from "react";
import Categorys from "./assets/components/Categorys";

function App() {
  const { getMovies } = useContext(DataContext);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/view/:movieId" element={<ViewMovie />}></Route>
        <Route path="/search" element={<SearchMovies />}></Route>
        <Route path="/:category" element={<Categorys />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
