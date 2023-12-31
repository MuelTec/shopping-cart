import React from 'react';
import propTypes from'prop-types';
import {BsCartDashFill} from 'react-icons/bs';

import './CartItem.css';
import fomartCurrency from '../../utils/formatCurrency';

const CartItem = ({data}) => {

  const {thumbnail, title, price} = data;

  return (
    <section className="cart-item">
      <img
        src={thumbnail} 
        alt="imagem do produto" 
        className="cart-item-image" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-title">{fomartCurrency(price, 'BRL')}</h3>

        <button 
          type="button" className="button-remove-item" 
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;