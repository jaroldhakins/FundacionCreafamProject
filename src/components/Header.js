import React, { useState, useEffect } from 'react';
//logo
import logoCreafam from '../assets/img/logoCreafam.png';


const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })
  return (
    <header className={`${header ? 'bg-yellow-400 py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
      <div className='container mx-auto flex flex-col items-center gap-y-6
      lg:flex-row lg: justify-between lg:gap-y-0'>
        {/* logo */}
        <a href='/'><img src={logoCreafam} className='h-15 w-[160px]'/></a>
        {/* nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'} 
        flex gap-x-4 font-tertiary tracking-[1px] text-[25px] items-center lg:gap-x-12`}>
          <a href='' className='hover:text-blue-600 transition'>Home</a>
          <a href='' className='hover:text-blue-600 transition'>Cabañas</a>
          <a href='' className='hover:text-blue-600 transition'>Centro Recreativo Granada</a>
          <a href='' className='hover:text-blue-600 transition'>Contact</a>
        </nav>
      </div>
    </header>
  )
};

export default Header;
