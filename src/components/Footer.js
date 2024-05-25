import React from 'react';
// logo
import logoCreafam from '../assets/img/logoCreafam.png';

const Footer = () => {
  return (
    <footer className='bg-blue-500 py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        {/* logo */}
        <a href='/'>
          <img className='h-15 w-[160px]' src={logoCreafam} alt='' />
        </a>
        Copyright &copy; 2024. All rights reserved.
      </div>

    </footer>
  )
};

export default Footer;
