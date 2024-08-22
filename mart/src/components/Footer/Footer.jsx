import React from 'react'
import { FaInstagram,FaYoutube,FaTwitter,FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-gray-500 text-white '>
      {/*Inner Div */}
      <div className='flex justify-between p-3 w-full'>
        {/*Paragraph div */}
        <div className='flex flex-col '>
          <h2 className='mx-[8%] font-medium text-[20px] my-2 '>Shopping Mart</h2>
          <p className='mx-[8%] text-start text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, a?amet, consectetur adipisicing elit. Maxime, a?</p>
        </div>
        {/*Coulmns div */}
        <div className='flex items-center justify-start my-2 gap-8 mx-[8%]'>

          <div className='flex flex-col'>
            <h2 className='text-[18px] font-medium'>Women</h2>
            <h4>Shirts</h4>
            <h4>Trousers</h4>
            <h4>Caps</h4>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[18px] font-medium'>Men</h2>
            <h4>hbjhf</h4>
            <h4>hbjhf</h4>
            <h4>hbjhf</h4>
          </div>
          <div className='flex flex-col'>
            <h2 className='text-[18px] font-medium'>Kids</h2>
            <h4>hbjhf</h4>
            <h4>hbjhf</h4>
            <h4>hbjhf</h4>
          </div>
        </div>
      </div>
      {/**Icons div */}
        <div className=' w-full flex my-14 items-center justify-center gap-4 text-2xl'>
          <FaInstagram/>
          <FaYoutube/>
          <FaTwitter/>
          <FaFacebook/>
        </div>
        <hr/>
        <p className='mx-auto text-center mt-6'>Copyright All rights reserved</p>
    </div>
  )
}

export default Footer
