// import Footer from './assets/components/Footer';
import CategoryCarrousel from '../components/CategoryCarrousel';
import MoviesForCategory from '../components/MoviesForCategory';
import NavbarSearch from '../components/NavbarSearch.jsx';
import Categorys from '../components/Categorys';

import { NextUIProvider } from "@nextui-org/react";

import { movies } from '../services/pelis';

import '../../App.css'
import { useState } from 'react';

function Index() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const allCategorys = movies.map((movie) => {
    return ((movie.Genre).split(','))[0]
  })

  const categorias = allCategorys.filter((categoria, index) => {
    return allCategorys.indexOf(categoria) === index;
  })

  const cambiarValor = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria)
  }

  console.log(categoriaSeleccionada);

  return (
    <NextUIProvider>
      <div className='bg-black min-h-screen text-white'>
        <main id='main'>
          <NavbarSearch></NavbarSearch>
          <div id='content-img' className='relative'>
            <div id='portada'>
              <div id='img'></div>
            </div>
            <div id='content-pelis' className='h-full'>
              <div id='peliculas' className='h-max'>
                <Categorys categorias={categorias} cambiarValor={cambiarValor} ></Categorys>
                {
                  (categoriaSeleccionada === 'Todas')
                    ? categorias.map((categoria) => (
                      <CategoryCarrousel key={categoria} category={categoria} movies={movies} />
                    ))
                    : <MoviesForCategory key={categoriaSeleccionada} category={categoriaSeleccionada} movies={movies} />
                }
              </div>
            </div>
          </div>
        </main>
        <footer className='h-40'>
          FOOTER
        </footer>
      </div>
    </NextUIProvider>
  );
}

export default Index;
