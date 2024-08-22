import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  setSelectedItem } from '../Store/CartSlice';
import data from '../../Data/Data.json';

const Men = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(setSelectedItem(item));
    navigate(`${item.id}`);
  }
  return (
    <>
      <div className='w-full '>
        <ul className='w-full flex flex-wrap items-center justify-center '>
          {
            data.catagorymen.map((item, idx) => (
              <li key={idx}
                className='md:w-[25%] flex-auto my-[20px] mx-[10px] h-[250px] rounded-md shadow-md flex  flex-col'>
                <Link to={`${item.id}`}>
                  <div className='w-full h-[200px] flex flex-col rounded-md' onClick={() => handleClick(item)} >
                    <img src={item.image} alt={item.name} className='w-full h-[100%] object-cover' />
                  </div>
                  <div className='flex items-center justify-between px-4 py-2'>
                    <h4>{item.name}</h4>
                    <h4>${item.price}</h4>
                    <div className='flex items-center gap-4 text-xl '>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Men
