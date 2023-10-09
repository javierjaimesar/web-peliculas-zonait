import facebook from "../icon/facebook.svg";
import instagram from "../icon/instagram.svg";
import location from '../icon/location.svg';
import web from '../icon/web.svg';
import gmail from '../icon/gmail.svg';
import phone from '../icon/phone.svg';

import zonaIt from '../img/zonaIt.png';

function Footer() {
  return (
    <footer className='flex flex-col justify-center bg-zinc-950 p-5 sm:px-10 sm:py-14'>
      <div className="flex justify-between flex-wrap gap-5 sm:gap-0 w-full">
        <div className='flex flex-col gap-1'>
          <div className="flex items-center gap-2">
            <img src={web} alt='web' className="w-6" />
            <a href="https://www.zonait.com.ar/" target="_blank">zonait.com.ar</a>
          </div>
          <div className="flex items-center gap-2">
            <img src={phone} alt='phone' className="w-6 p-0.5" />
            <p>381 207-0566</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={gmail} alt="gmail" className="w-6 p-0.5" />
            <p>info@zonait.com.ar</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={location} alt="location" className="w-6" />
            <p>San Martín 1051 - San Miguel de Tucumán, Tucumán</p>
          </div>
        </div>
        <div className="flex gap-5 w-full sm:w-max items-center justify-between sm:flex-col">
          <div className="flex justify-end sm:w-full gap-3">
            <a href="https://www.facebook.com/ZonaIT.com.ar" target="_blank">
              <img src={facebook} alt="facebook" className="w-6" />
            </a>
            <a href="https://www.instagram.com/zonaitoficial" target="_blank">
              <img src={instagram} alt="instagram" className="w-6" />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://www.zonait.com.ar/" target="_blank">
              <img src={zonaIt} alt="zonaIt" className="w-32" />
            </a>
          </div>
        </div>
      </div>
      <div className='py-5 w-full'>
        <hr className='border-white' />
      </div>
      <p className="text-center">Copyright © 2023 - ZonaIT</p>
    </footer>
  )
}

export default Footer