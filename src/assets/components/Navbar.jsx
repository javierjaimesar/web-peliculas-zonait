import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";

import searchIcon from "../icon/search.svg";
import backIcon from "../icon/back.svg";
import zonaIt from "../img/zonaIt.png";
import { useContext } from "react";

export function Navbar({ position, logo, cambiarValor }) {
  const { setCategory } = useContext(DataContext);

  const handleClick = () => {
    setCategory("Todas");
    cambiarValor("Todas");
  };

  return (
    <nav
      className={
        "flex justify-between items-center py-5 px-5 w-full top-0 z-10 " +
        position
      }
    >
      <Link to={"/"}>
        {logo ? (
          <img
            src={zonaIt}
            alt={zonaIt}
            className="w-20 sm:w-28"
            onClick={handleClick}
          />
        ) : (
          <img src={backIcon} alt={backIcon} className="w-8 sm:w-10" />
        )}
      </Link>
      <Link to={"/search"}>
        <img src={searchIcon} alt={searchIcon} className="w-8 sm:w-10" />
      </Link>
    </nav>
  );
}

export default Navbar;
