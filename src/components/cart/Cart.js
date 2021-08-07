import React from 'react';
import cartItems from './cartItem'
import { useDispatch, useSelector } from 'react-redux';

export default function Cart(){
    const dispatch = useDispatch();
    const cart = useSelector();

}