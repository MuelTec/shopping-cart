import React, { useContext } from 'react';
import propTypes from 'prop-types';
import{BsFillCartPlusFill} from 'react-icons/bs';

import './ProdutoCard.css';
import fomartCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProdutoCard({ data }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);


  return (
    <section className="produto-card">

      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className="card-image" 
      />

      <div className="card-infos">
        <h2 className="card-price">{fomartCurrency(price,'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button type="button"
        className="buttton-add-card"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProdutoCard;

ProdutoCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;