import React, {useEffect, useContext} from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProdutoCard from '../ProdutoCard/ProdutoCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {

  const {products, setProducts, loading, setLoading} = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((resposta) => {
      setProducts(resposta);
      setLoading(false);
    });
  }, []);

  console.log(products);

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map ((product) => <ProdutoCard key={product.id} data={product}/>)}
      </section>
    )

  );
};

export default Products;