import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { addItemToCart, addItemToFav } from '../Store/CartSlice';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const selectedItem = useSelector((state) => state.cart.selectedItem);
    // Check if the selected item exists and matches the ID from the URL
    if (!selectedItem || selectedItem.id !== id) {
        return <p>Item not found</p>; // Handle cases where the item is not found
    }

    const handleAddToCart = (selectedItem) => {
        dispatch(addItemToCart(selectedItem)); // Single action to add item and increment cart count
    };

    const handleAddToFavourite = (selectedItem) => {
        dispatch(addItemToFav(selectedItem))
        setIsClicked((prev) => ({
            ...prev,
            [selectedItem.id]: !prev[selectedItem.id]
        }));

    }
    return (
        <div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[800px] h-[60%] shadow-lg rounded-md flex flex-col items-center p-4 my-2'>
                    <div className='flex items-center gap-10 p-4'>
                        <div className='w-[200px] h-[300px] rounded-md '>
                            <img src={selectedItem.image} alt="image" className='w-full h-[100%] object-cover rounded-md' />
                        </div>
                        <div className='felx flex-col gap-2'>

                        <h2 className='text-[22px] font-medium leading-tight'>Name : {selectedItem.name}</h2>
                        <p className='text-[22px] font-medium leading-relaxed'>Price : ${selectedItem.price}</p>
                        </div>
                    </div>
                        <div className='flex items-center my-4 justify-between w-[50px] text-[40px] gap-6'>
                            <button>
                                <IoCartOutline className=' text-blue-400  font-medium'
                                    onClick={() => handleAddToCart(selectedItem)} />
                            </button>
                            <button>
                                <FaRegHeart className={` ${isClicked[selectedItem.id] ? 'text-red-500' : ''}`} onClick={() => handleAddToFavourite(selectedItem)} />
                            </button>
                        </div>
                    <h2 className='text-[22px]  font-medium'>Description:</h2>
                    <p className='text-[15px]  leading-tight'>{selectedItem.des}</p>
                </div>
            </div>
        </div>
    )
}

export default Details
