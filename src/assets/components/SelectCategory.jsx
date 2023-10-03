import { useEffect, useState, useRef } from 'react';

export default function SelectCategory({ categorias, cambiarValor }) {
    const variants = ["flat", "bordered", "underlined", "faded"];

    const [category, setCategory] = useState('Categoría');
    const select = useRef(null)

    useEffect(() => {
        console.log(select.current.value);
        setCategory(select.current.value)
        cambiarValor(select.current.value)
    }, [category])

    const handleClick = (e) => {
        console.log(e.target.value);

        let nuevoValor = e.target.value
        setCategory(nuevoValor)
        console.log(category);
    }

    return (
        <div className="w-full flex flex-col gap-4 p-4 relative z-10">
            <div className="flex w-full flex-wrap md:flex-nowrap md:mb-0 gap-4">
                <select id="small" className="block w-96 p-2 text-sm text-gray-200 border border-gray-200 rounded-lg bg-transparent focus:ring-blue-500 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ref={select} onClick={handleClick}>
                    <option>Categoría</option>
                    {categorias.map(categoria => (
                        <option key={categoria} className="text-white bg-black checked:bg-slate-600 py-2">
                            {categoria}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
