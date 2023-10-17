import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { useMovies } from '../hook/useMovies'
import { Movies } from '../components/Movies';
import {Input} from "@nextui-org/react";

import debounce from 'just-debounce-it'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DataContext } from '../context/DataContext';

function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

    console.log('hola');

    useEffect(() => {
        if (search === '') {
            return
        }
        if (search === "") {
            setError("No se puede buscar la pelicula vacía")
            return
        }
        if (search.match(/^\d+$/)) {
            setError("No se puede buscar una pelicula con un número")
            return
        }
        if (search.length < 3) {
            setError("La busqueda debe tener al menos 3 caracteres")
            return
        }

        setError(null)
    }, [search])

    return { search, setSearch, error }
}

function Search() {
    const { search, setSearch, error } = useSearch()
    // const { movies, getMovies, loading } = useMovies({ search })
    const { movies, getMovies, loading } = useContext(DataContext)
    const firstRender = useRef(false)

    const debounceGetMovies = useCallback(
        debounce((search) => {
            getMovies({ search })
        }, 500)
        , [getMovies])

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     getMovies({ search })
    // }

    const handleChange = (e) => {
        firstRender.current = true
        const value = e.target.value;
        setSearch(value);
        debounceGetMovies(value)
    }

    return (
        <div className='min-h-screen'>
            <div className='flex flex-col h-full min-h-screen bg-black text-white'>
                <Navbar position={''} logo={false} />
                <div className='body-wrapper'>
                    <header className='bg-zinc-950 p-5'>
                        <form className='flex justify-center text-5xl form'>
                            <Input type="email" variant={"underlined"} placeholder="Buscar..." 
                            onChange={handleChange} value={search} className='w-full max-w-2xl pb-3 placeholder:text-white text-white' />    
                        </form>
                        {error && <p className='text-center' style={{ color: 'red' }}>{error}</p>}
                    </header>
                    <main className='main text-center pt-8 px-4'>
                        {
                            firstRender.current && <Movies movies={movies} loading={loading} />
                        }
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Search