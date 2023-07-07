import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {

  const { cartItems } = useContext(AppContext);

  return (
    <button type="button" className="cart-button">
      <AiOutlineShoppingCart />
      <span className="cart-status">{cartItems.length}</span>
    </button>
  );
};

export default CartButton;