import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import martlogo from '../../assets/martlogo.png';
import { IoMenu } from "react-icons/io5";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const Count = useSelector((state) => state.cart.cartCount);
    const { loginWithRedirect } = useAuth0();
    const { logout, isAuthenticated } = useAuth0();
    return (
        <div className='w-full bg-black flex items-center justify-between p-2 font-DM relative'>
            <nav className='flex items-center  list-none gap-4'>
                <ul className={` ${isMenuOpen ? 'text-white' : ''}
                
                transform ${isMenuOpen ? 'translate-x-0' : 'hidden translate-x-full'} 
                        transition-transform duration-300 ease-in-out 
                        flex flex-col items-center justify-center gap-4 
                        md:static md:flex md:flex-row md:h-auto md:w-auto 
                        md:bg-transparent md:translate-x-0 md:transition-none
                        md:gap-4 md:items-center md:text-white`}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'bg-white' : 'text-white'
                            }
                        ></NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='women'
                            className={({ isActive }) =>
                                isActive ? 'bg-white' : 'text-white'
                            }
                        >Women</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='men'
                            className={({ isActive }) =>
                                isActive ? 'bg-white' : 'text-white'
                            }
                        >Men</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='kids'
                            className={({ isActive }) =>
                                isActive ? 'bg-white' : 'text-white'
                            }
                        >Kids</NavLink>
                    </li>
                </ul>
                <IoMenu className="text-xl cursor-pointer  text-white md:hidden"
                    onClick={toggleMenu} />
            </nav>
            {/*Logo */}
            <div className='text-white w-[80px] h-[80px]'>
                <img src={martlogo} alt="LOGO" className='w-full h-[100%] object-cover' />
            </div>
            {/*Icons and button */}
            <div className='text-white flex items-center gap-4 p-2'>
                <div className='flex items-center text-2xl gap-2'>
                    <Link to='/favourites'>
                        <FaRegHeart />
                    </Link>
                    <Link to='/cart'>
                        <IoCartOutline className='relative' />
                        <div className='bg-blue-400 absolute top-3 right-[100px] flex items-center justify-center rounded-full w-[20px] h-[20px]'>
                            <h1 className='text-sm'>{Count}</h1>
                        </div>
                    </Link>
                </div>
                {/* {
                    isAuthenticated && (
                        <p className='absolute top-20 right-10 text-[18px]'>{user.name}</p>
                    )
                } */}
                {
                    isAuthenticated ?
                        (
                            <button className='bg-white px-4 py-2 rounded-md text-black '
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        ) :

                        (<button className='bg-white px-4 py-2 rounded-md text-black '
                            onClick={() => loginWithRedirect()}
                        >
                            Login
                        </button>
                        )
                }

            </div>
        </div>
    )
}

export default Header

