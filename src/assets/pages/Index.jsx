import { DataContext } from "../context/DataContext";
import { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCarrousel from "../components/CategoryCarrousel";
import MoviesForCategory from "../components/MoviesForCategory";
import Categorys from "../components/Categorys";

import { NextUIProvider } from "@nextui-org/react";

import "../../App.css";

function Index() {
  const { movies, loading } = useContext(DataContext);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const allCategorys = movies?.map((movie) => {
    return movie.genre.split(", ")[0];
  });

  const categorys = allCategorys.filter((categoria, index) => {
    return allCategorys.indexOf(categoria) === index;
  });

  const cambiarValor = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria);
  };

  console.log(categorys);

  return (
    <NextUIProvider>
      <div className="bg-black min-h-screen text-white relative">
        <main id="main">
          <Navbar
            position={"absolute"}
            logo={true}
            cambiarValor={cambiarValor}
          />
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
                  categorys.map((category) => (
                    <CategoryCarrousel
                      key={category}
                      category={category}
                      loading={loading}
                    />
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
