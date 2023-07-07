import React from 'react';
import {BsCartDashFill} from 'react-icons/bs';

const CartItem = () => {
  return (
    <section className="cart-item">
      <img
        src="" 
        alt="imagem do produto" 
        className="cart-item-image" 
      />

      <div className="cart-item-content">
        <h3 className="cart-item-title">Titulo do produto</h3>
        <h3 className="cart-item-title">R$ 123,0</h3>

        <button 
          type="button" className="button--remove-item" 
        >
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
};

export default CartItem;