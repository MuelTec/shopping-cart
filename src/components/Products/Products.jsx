import React, {useState,useEffect} from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProdutoCard from '../ProdutoCard/ProdutoCard';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((resposta) => {
      setProducts(resposta);
    });
  }, []);

  console.log(products);

  return (
    <section className="products container">
      {
        products.map ((product) => <ProdutoCard key={product.id} data={product}/>)
      }
    </section>
  );
};

export default Products;