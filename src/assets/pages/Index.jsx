import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCarrousel from "../components/CategoryCarrousel";
import MoviesForCategory from "../components/MoviesForCategory";
import NavbarSearch from "../components/NavbarSearch.jsx";
import Categorys from "../components/Categorys";
// import { movies } from "../services/pelis";

import { NextUIProvider } from "@nextui-org/react";

import "../../App.css";

function Index() {
  const { movies, getMovies, loading} = useContext(DataContext);

  useEffect(() => {
    getMovies();
  }, []);
  
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  
  console.log('hoola');

  const allCategorys = movies?.map((movie) => {
    return movie.genre.split(",")[0];
  });

  const categorys = allCategorys.filter((categoria, index) => {
    return allCategorys.indexOf(categoria) === index;
  });

  const cambiarValor = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria);
  };

  return (
    <NextUIProvider>
      <div className="bg-black min-h-screen text-white relative">
        <main id="main">
          <Navbar position={"absolute"} logo={true} />
          {/* <NavbarSearch></NavbarSearch> */}
          <div id="content-img" className="relative">
            <div id="portada">
              <div id="img"></div>
            </div>
            <div id="content-pelis" className="h-full">
              <div id="peliculas" className="h-max">
                <Categorys
                  categorys={categorys}
                  cambiarValor={cambiarValor}
                ></Categorys>
                {categoriaSeleccionada === "Todas" ? (
                  categorys?.map((category) => (
                    <CategoryCarrousel key={category} category={category} loading={loading} />
                  ))
                ) : (
                  <MoviesForCategory category={categoriaSeleccionada} />
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </NextUIProvider>
  );
}

export default Index;
