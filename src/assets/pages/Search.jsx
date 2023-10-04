import { useState, useEffect, useRef, useContext, useCallback } from 'react';
import { useMovies } from '../hook/useMovies'
import { DataContext } from '../context/DataContext';
import { Movies } from '../components/Movies';
import {Input} from "@nextui-org/react";
import Footer from '../components/Footer';

import debounce from 'just-debounce-it'
import Navbar from '../components/Navbar';

function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)

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
    const { allMovies } = useContext(DataContext);
    const { search, setSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search })
    const firstRender = useRef(false)

    const debounceGetMovies = useCallback(
        debounce((search) => {
            getMovies({ search })
        }, 500)
        , [getMovies])

    const handleSubmit = (e) => {
        e.preventDefault()
        getMovies({ search })
    }

    const handleChange = (e) => {
        firstRender.current = true
        const value = e.target.value;
        setSearch(value);
        debounceGetMovies(value)
    }

    return (
        <div className='bg-black page text-white'>
            <Navbar position={''} />
            <header className='mx-auto'>
                <form className='flex justify-center form' onSubmit={handleSubmit}>
                    <Input type="email" variant={"underlined"} placeholder="Enter your email" 
                    onChange={handleChange} value={search} className='w-full max-w-2xl py-3 placeholder-white text-white' />    
                    {/* <input className='' style={{
                        border: '1px solid transparent',
                        borderColor: error ? 'red' : 'transparent'
                    }} onChange={handleChange} value={search} name='query' placeholder='Avengers, etc.' /> */}
                </form>
                {error && <p className='text-center' style={{ color: 'red' }}>{error}</p>}
            </header>

            <main className='main min-h-screen'>
                {
                    firstRender.current && <Movies movies={movies} loading={loading} />
                }
            </main>
            <Footer />
        </div>
    )
}

export default Search