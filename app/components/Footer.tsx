import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary dark:bg-base-200 md:px-20 px-5 w-full py-5 flex justify-between items-center text-base-200 dark:text-base-content'>
        <div className='flex items-center gap-1'>
            <Image src={logo} width={50} height={50} alt='Logo' className='select-none' />
            <p className='md:text-lg text-md'>Where billing feels <span className='text-accent'>natural</span></p>
        </div>
        <p className='md:text-md text-sm md:text-start text-end'>&copy; {new Date().getFullYear()} Oakbill. All rights reserved.</p>
    </footer>
  )
}

export default Footer