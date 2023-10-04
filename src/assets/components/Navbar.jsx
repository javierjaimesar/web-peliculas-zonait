import { Link } from 'react-router-dom';

import searchIcon from '../icon/search.svg';
import backIcon from '../icon/back.svg';

export function Navbar ({ position }) {
    return (
        <nav className={'flex justify-between items-center py-5 px-5 w-full top-0 z-10 ' + position}>
            <Link to={'/'} >
              <img src={backIcon} alt={backIcon} />
            </Link>
            <Link to={'/search'} >
              <img src={searchIcon} alt={searchIcon} />
            </Link>
        </nav>
    )
}

export default Navbar