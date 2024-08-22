import React from 'react'

import { Link } from 'react-router-dom'
import Herosec from '../Homecomponents/Herosec/Herosec'
import { IoArrowForward } from "react-icons/io5";
import data from '../../Data/Data.json'


const Home = () => {
  const lastThreeItems = data.catagorywomen.slice(-3);
  const lastthreeItems=data.catagorymen.slice(-3);

  const handleClick = () => {
    window.location.href = 'http://localhost:5173/women';
  };

  const handleMenClick = () => {
    window.location.href = 'http://localhost:5173/men';
  };



  return (
    <div>
      <Herosec />
      <div>
        <div className='flex items-center justify-between p-4 w-full'>
          <h2 className='text-[22px] font-medium'>Women Wears</h2>
          <button onClick={handleClick}>
            <IoArrowForward className='text-[22px] font-medium' />
          </button>
        </div>
        <div className='w-full '>
          <ul className='w-full flex flex-wrap items-center justify-center '>
            {
              lastThreeItems.map((item, idx) => (
                <li key={idx}
                  className='md:w-[25%] flex-auto my-[20px] mx-[10px] h-[250px] rounded-md shadow-md flex  flex-col'>
                  <Link to={`${item.id}`}>
                    <div className='w-full h-[200px] flex flex-col rounded-md' onClick={() => handleClick(item)} >
                      <img src={item.image} alt={item.name} className='w-full h-[100%] object-cover' />
                    </div>
                    <div className='flex items-center justify-between px-4 py-2'>
                      <h4>{item.name}</h4>
                      <h4>${item.price}</h4>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {/*Men Items */}
      <div>
      <div className='flex items-center justify-between p-4 w-full'>
          <h2 className='text-[22px] font-medium'>Men Wears</h2>
          <button onClick={handleMenClick}>
            <IoArrowForward className='text-[22px] font-medium' />
          </button>
        </div>

        <div className='w-full '>
          <ul className='w-full flex flex-wrap items-center justify-center '>
            {
              lastthreeItems.map((item, idx) => (
                <li key={idx}
                  className='md:w-[25%] flex-auto my-[20px] mx-[10px] h-[250px] rounded-md shadow-md flex  flex-col'>
                  <Link to={`${item.id}`}>
                    <div className='w-full h-[200px] flex flex-col rounded-md' onClick={() => handleMenClick(item)} >
                      <img src={item.image} alt={item.name} className='w-full h-[100%] object-cover' />
                    </div>
                    <div className='flex items-center justify-between px-4 py-2'>
                      <h4>{item.name}</h4>
                      <h4>${item.price}</h4>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Home
