import { Link } from 'react-router-dom';

import searchIcon from '../icon/search.svg';
import backIcon from '../icon/back.svg';
import zonaIt from '../img/zonaIt.png';

export function Navbar ({ position, logo }) {
    return (
        <nav className={'flex justify-between items-center py-5 px-5 w-full top-0 z-10 ' + position}>
            <Link to={'/'} >
              {
                logo ? <img src={zonaIt} alt={zonaIt} className='w-20 sm:w-28' /> : <img src={backIcon} alt={backIcon} className='w-8 sm:w-10' />
              }
            </Link>
            <Link to={'/search'} >
              <img src={searchIcon} alt={searchIcon} className='w-8 sm:w-10' />
            </Link>
        </nav>
    )
}

export default Navbar