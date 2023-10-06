import { useState,useEffect,useContext,useCallback,useRef } from 'react';
import { DataContext } from '../context/DataContext';
import { Movies } from '../components/Movies';
import {Input} from "@nextui-org/react";

import debounce from 'just-debounce-it'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function SearchMovies () {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const firstRender = useRef(false)
    const { getMovies } = useContext(DataContext)

    useEffect(() => {
        console.log(search);
        setMovies(getMovies(search));
    },[search])

    const debounceGetMovies = useCallback(
        debounce((search) => {
            getMovies(search)
        }, 500)
        , [getMovies])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies(getMovies(search))
    }

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
                        <form className='flex justify-center text-5xl form' onSubmit={handleSubmit}>
                            <Input type="email" variant={"underlined"} placeholder="Titulo, Actor, Escritor..." 
                            onChange={handleChange} value={search} className='w-full max-w-2xl pb-3 placeholder:text-white text-white' />    
                        </form>
                    </header>
                    <main className='main text-center pt-8 px-4'>
                        {
                            firstRender.current && <Movies movies={movies} />
                        }
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SearchMovies