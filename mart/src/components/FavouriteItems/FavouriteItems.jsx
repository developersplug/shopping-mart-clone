import React from 'react'
import { useSelector } from 'react-redux'

const FavouriteItems = () => {
    const favItems=useSelector((state)=>state.cart. favourite)
  return (
    <div>
      <h2 className='text-2xl font-bold text-center mb-4'>Favourite Items</h2>
      {favItems.length > 0 ? (
        <div className='flex justify-between p-2 items-center'>
          {favItems.map((item, idx) => (
            <div key={idx} className='w-[80%] mx-auto text-center mb-4 shadow-md p-4'>
                <h2 className='text-xl font-medium'>Item ID: {item.id}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-center text-lg'>You add nothing to favourites</p>
      )}
    </div>
  )
}

export default FavouriteItems
