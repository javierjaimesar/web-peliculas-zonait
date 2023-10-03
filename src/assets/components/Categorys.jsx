import { Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Categorys({ categorias, cambiarValor }) {
  const variants = ["flat", "bordered", "underlined", "faded"];

  const [category, setCategory] = useState('Todas')

  useEffect(() => {
    cambiarValor(category)
  }, [category])

  const handleChange = (e) => {
    console.log(e.target.innerText);
    const nuevoValor = e.target.innerText
    setCategory(nuevoValor)
  }

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <div key={"bordered"} className="flex w-full flex-wrap md:flex-nowrap m-0 gap-4">
        <Select
          variant={"bordered"}
          label="Categoría"
          className="max-w-xs"
        >
          <SelectItem key={'Todas'} value={'Todas'} onClick={handleChange}>
            {'Todas'}
          </SelectItem>
          {categorias.map((categoria) => (
            <SelectItem key={categoria} value={categoria} onClick={handleChange}>
              {categoria}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

