import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import shirt1 from '../../assets/shirt1.avif';
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import shirt2 from '../../assets/shirt2.avif'
// import shirt3 from '../../assets/shirt3.avif'
// import shirt4 from '../../assets/shirt4.avif'
// import shirt5 from '../../assets/shirt5.avif'
// import womencap from '../../assets/womencap.avif';
// import cap2 from '../../assets/cap2.avif';
// import cap3 from '../../assets/cap3.avif';
// import womentrouser from '../../assets/womentrouser.avif'
import {  setSelectedItem } from '../Store/CartSlice';
import data from '../../Data/Data.json';

const Women = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [isClicked, setIsClicked] = useState(false);
  // const handleAddToCart = (item) => {
  //   dispatch(addItemToCart(item)); // Single action to add item and increment cart count
  // };
  // const handleAddToFavourite = (item) => {
  //   dispatch(addItemToFav(item))
  //   setIsClicked((prev) => ({
  //     ...prev,
  //     [item.id]: !prev[item.id]
  //   }));

  // }
  const handleClick = (item) => {
    dispatch(setSelectedItem(item));
    navigate(`${item.id}`);
  }

  // const items = [
  //   {
  //     id: 'shirt1',
  //     name: "Shirt1",
  //     image: shirt1,
  //     price: '10',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'shirt2',
  //     name: "Shirt2",
  //     image: shirt2,
  //     price: '20',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'shirt3',
  //     name: "Shirt3",
  //     image: shirt3,
  //     price: '30',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'shirt4',
  //     name: "Shirt4",
  //     image: shirt4,
  //     price: '40',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'shirt5',
  //     name: "Shirt5",
  //     image: shirt5,
  //     price: '50',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'cap1',
  //     name: "Cap1",
  //     image: womencap,
  //     price: '60',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'cap2',
  //     name: "Cap2",
  //     image: cap2,
  //     price: '70',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'cap3',
  //     name: "Cap3",
  //     image: cap3,
  //     price: '80',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  //   {
  //     id: 'womentrouser',
  //     name: "Trouser",
  //     image: womentrouser,
  //     price: '90',
  //     des: "lorems bjsdfuer bcdgfhrei ucgerfer urehufhe ifuerhyfhe ufyergtfu ggyfuerf ggd eg4r7y4   e4u83ry4 rygy438ry 843r 4 bdsudygfweiu w eygue dvwyger "
  //   },
  // ]
  return (

    <>
      <div className='w-full '>
        <ul className='w-full flex flex-wrap items-center justify-center '>
          {
            data.catagorywomen.map((item, idx) => (
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
                      {/* <FaRegHeart className={`cursor-pointer ${isClicked[item.id] ? 'text-red-500' : ''}`} onClick={() => handleAddToFavourite(item)} /> */}
                      {/* <IoCartOutline className='cursor-pointer' onClick={() => handleAddToCart(item)} /> */}
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

export default Women
