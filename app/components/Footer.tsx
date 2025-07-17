import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary px-20 py-5 flex justify-between items-center'>
        <div className='flex items-center gap-1'>
            <Image src={logo} width={50} height={50} alt='Logo' className='select-none' />
            <p className='text-base-200 text-lg'>Where billing feels <span className='text-accent'>natural</span></p>
        </div>
        <p className='text-base-200'>&copy; {new Date().getFullYear()} Oakbill. All rights reserved.</p>
    </footer>
  )
}

export default Footer