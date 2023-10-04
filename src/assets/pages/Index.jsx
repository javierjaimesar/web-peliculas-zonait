import { DataContext } from '../context/DataContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// import Footer from './assets/components/Footer';
import CategoryCarrousel from '../components/CategoryCarrousel';
import MoviesForCategory from '../components/MoviesForCategory';
import NavbarSearch from '../components/NavbarSearch.jsx';
import Categorys from '../components/Categorys';

import searchIcon from '../icon/search.svg';
import backIcon from '../icon/back.svg';

import { NextUIProvider } from "@nextui-org/react";

import '../../App.css'

function Index() {
  const { categorys, allMovies } = useContext(DataContext)

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // const allCategorys = movies.map((movie) => {
  //   return ((movie.Genre).split(','))[0]
  // })

  // const categorias = allCategorys.filter((categoria, index) => {
  //   return allCategorys.indexOf(categoria) === index;
  // })

  const cambiarValor = (nuevaCategoria) => {
    setCategoriaSeleccionada(nuevaCategoria)
  }

  console.log(categoriaSeleccionada);

  return (
    <NextUIProvider>
      <div className='bg-black min-h-screen text-white relative'>
        <main id='main'>
          <nav className='flex justify-between items-center py-5 px-5 w-full absolute top-0 z-10'>
            <Link to={'/'} >
              <img src={backIcon} alt={backIcon} />
            </Link>
            <Link to={'/search'} >
              <img src={searchIcon} alt={searchIcon} />
            </Link>
          </nav>
          {/* <NavbarSearch></NavbarSearch> */}
          <div id='content-img' className='relative'>
            <div id='portada'>
              <div id='img'></div>
            </div>
            <div id='content-pelis' className='h-full'>
              <div id='peliculas' className='h-max'>
                <Categorys categorias={categorys} cambiarValor={cambiarValor} ></Categorys>
                {
                  (categoriaSeleccionada === 'Todas')
                    ? categorys.map((categoria) => (
                      <CategoryCarrousel key={categoria} category={categoria} movies={allMovies} />
                    ))
                    : <MoviesForCategory category={categoriaSeleccionada} />
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
