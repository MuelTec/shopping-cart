import React from 'react';
import propTypes from 'prop-types';
import fomartCurrency from '../../utils/formatCurrency';

import './ProdutoCard.css';
import{BsFillCartPlusFill} from 'react-icons/bs';

function ProdutoCard({ data }) {
  const { title, thumbnail, price } = data;

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

      <button type="button" className="buttton-add-card">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProdutoCard;

ProdutoCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;