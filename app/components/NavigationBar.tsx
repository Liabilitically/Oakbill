import React from 'react';
import { Abril_Fatface } from "next/font/google";
import Image from 'next/image';
import logo from '../assets/logo.png';

const abrilFlatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});

const NavigationBar = () => {
  return (
    <div className='flex navbar w-full bg-transparent select-none'>
      <div className='navbar-start'></div>
      <div className='navbar-center my-7'>
        <Image src={logo} width={90} height={90} alt='Logo' />
        <h1 className={`text-base-content text-5xl ${abrilFlatface.className}`}>Oakbill</h1>
      </div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default NavigationBar