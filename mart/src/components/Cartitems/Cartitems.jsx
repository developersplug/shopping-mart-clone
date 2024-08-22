import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart } from '../Store/CartSlice';

const Cartitems = () => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.items);

  const handleDelItems = (item) => {
    dispatch(removeItemFromCart(item.idx));
    // cartItems=cartItems.filter(item=>item.idx!==item.idx)

  }

  const handleTotal = () => {
    const sum = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
    setTotal(sum);
  };

  return (
    <>
      <div>
        <h2 className='text-2xl font-bold text-center mb-4'>Cart</h2>
        {cartItems.length > 0 ? (
          <div className='flex  p-2 items-center flex-col shadow-md rounded-md'>
            {cartItems.map((item, idx) => (
              <>
                <div key={idx} className={`w-[80%] mx-auto text-center mb-4 shadow-md p-4 flex justify-between items-center`}>
                  <div className='w-[200px] h-[200px] rounded-md '>
                      <img src={item.image} alt={item.name} className='w-full h-[100%] object-cover rounded-md'/>
                  </div>
                  <h2 className='text-xl font-medium'>Item ID: {item.id}</h2>
                  <p className='text-[18px]'>Price: ${item.price}</p>
                  <button
                    className='bg-blue-400 h-[50px] w-[100px] rounded-md'
                    onClick={() => { handleDelItems(item) }}>Delete Item</button>
                </div>
              </>
            ))}
            <button
              className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-md shadow-md'
              onClick={handleTotal}
            >
              Calculate Total
            </button>
            <div className='mt-4'>
              <h2 className='text-xl font-medium my-2'>Total Price:${total}</h2>
            </div>
          </div>
        ) : (
          <p className='text-center text-lg'>Your cart is empty</p>
        )
        }

      </div>
    </>
  )
}

export default Cartitems
