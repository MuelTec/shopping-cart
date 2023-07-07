import React, { useContext } from 'react';

import './carrinho.css';
import CartItem from '../Cartitem/CartItem';
import AppContext from '../../context/AppContext';
import fomartCurrency from '../../utils/formatCurrency';

const Carrinho = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  return (
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className="carrinhos-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
      </div>

      <div className="carrinho-resumo">{fomartCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
};

export default Carrinho;