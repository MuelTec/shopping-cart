import React, { useContext } from 'react';

import './carrinho.css';
import CartItem from '../Cartitem/CartItem';
import AppContext from '../../context/AppContext';

const Carrinho = () => {
  const { cartItems } = useContext(AppContext);

  return (
    <section className="carrinho">
      <div className="carrinhos-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}


        
      </div>

      <div className="carrinho-resumo">resumo do carrinho</div>
    </section>
  );
};

export default Carrinho;