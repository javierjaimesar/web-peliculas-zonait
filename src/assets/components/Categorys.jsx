import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useHistory } from "react-router-dom";

export default function Categorys({ categorys, cambiarValor }) {
  const [category, setCategory] = useState("Todas");
  const history = useHistory();

  useEffect(() => {
    cambiarValor(category);
  }, [category]);

  const handleChange = (e) => {
    const nuevoValor = e.target.innerText;
    setCategory(nuevoValor);

    // Genera la ruta dinámica con el nuevo valor
    const dynamicRoute = `/${nuevoValor}`;

    // Navega a la ruta dinámica
    history.push(dynamicRoute);
  };

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <div
        key={"bordered"}
        className="flex w-full flex-wrap md:flex-nowrap m-0 gap-4"
      >
        <Select variant={"bordered"} label="Categoría" className="max-w-xs">
          <SelectItem key={"Todas"} value={"Todas"} onClick={handleChange}>
            {"Todas"}
          </SelectItem>
          {categorys?.map((category) => (
            <SelectItem key={category} value={category} onClick={handleChange}>
              {category}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
