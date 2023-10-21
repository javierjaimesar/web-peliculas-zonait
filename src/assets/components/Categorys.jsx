import { DataContext } from "../context/DataContext";
import { useEffect, useContext, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";

export default function Categorys({ categorys, cambiarValor }) {
  const { category, setCategory } = useContext(DataContext);
  const [value, setValue] = useState(new Set([]));
  // const categoryDefault = ["Todas"];
  const navigate = useNavigate();
  const params = useParams();
  const allCategorys = ["Todas", ...categorys];

  useEffect(() => {
    if(JSON.stringify(params) === "{}"){
      setCategory('Todas')
      cambiarValor('Todas')
    }else{
      setCategory(params.category)
      cambiarValor(params.category);
    }
  }, [category]);

  const handleClick = (e) => {
    const nuevoValor = e.target.innerText;
    setCategory(nuevoValor);

    if (nuevoValor === "Todas") {
      navigate(`/`);
    } else {
      navigate(`/${nuevoValor}`);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 px-2 sm:px-2 md:px-4 lg:px-8 xl:px-12">
      <div
        key={"bordered"}
        className="flex w-full flex-wrap md:flex-nowrap m-0 gap-4"
      >
        <Select
          variant={"bordered"}
          label="Categoría"
          className="max-w-xs"
          selectedKeys={[category]}
          onSelectionChange={setValue}
          onClose={() => setValue(category)}
        >
          {allCategorys?.map((category) => (
            <SelectItem key={category} value={category} onClick={handleClick}>
              {category}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
