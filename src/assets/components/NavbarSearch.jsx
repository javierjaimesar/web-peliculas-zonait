function NavbarSearch() {
    return (
        <nav className="container flex justify-center items-center px-4 py-5 absolute inset-x-0 top-0 z-10 min-w-full">
            <form className="w-full flex justify-center">
                <div className="relative w-full max-w-2xl">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-full max-w-2xl p-4 pl-10 text-sm border rounded-xl focus:border-blue-950 bg-black border-white placeholder-white text-white focus:ring-blue-950" placeholder="Titulo, actores, directores" required=""
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-black hover:bg-zinc-900 focus:ring-blue-950">Buscar
                    </button>
                </div>
            </form>
        </nav>
    )
}

export default NavbarSearch