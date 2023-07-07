import React from 'react';
import './carrinho.css';
import CartItem from '../Cartitem/CartItem';

const Carrinho = () => {
  return (
    <section className="carrinho">
      <div className="carrinhos-items">
        <CartItem/>
      </div>

      <div className="carrinho-resumo">resumo do carrinho</div>
    </section>
  );
};

export default Carrinho;