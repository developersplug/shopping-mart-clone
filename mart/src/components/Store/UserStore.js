import {configureStore} from '@reduxjs/toolkit';
import  CartSlice  from './CartSlice';
export const UserStore=configureStore({
    reducer:{
        cart:CartSlice,
        
    }
})