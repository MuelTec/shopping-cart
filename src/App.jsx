import React from 'react';
import Header from './components/Header/Hearder';
import Products from './components/Products/Products';
import Provider from './context/Provider';
import Carrinho from './components/Carrinho/Carrinho';

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Carrinho />
    </Provider>
  );
}

export default App;
