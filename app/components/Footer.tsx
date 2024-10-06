import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
        <div>
            <Image src='/images/logo1.png' alt='logo' width={150} height={150} className='mx-auto' />
        </div>
        <div className='flex items-center flex-wrap justify-center space-x-10 space-y-2 text-white font-bold'>
            <div>Home.</div>
            <div>Service.</div>
            <div>Project.</div>
            <div>Review.</div>
            <div>Contact.</div>
        </div>
        <p className='text-white text-opacity-60 mt-6 text-center'>
        &copy; 2024 All Rights Reserved by AimTzy
        </p>
    </div>
  );
};

export default Footer;