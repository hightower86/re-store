import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';
import ShoppingCartTable from '../shopping-cart-table';

import './app.css';

function App() {
  
  return (
    <div>
      <ShopHeader numItems={5} total={210}/>
      <main role='main' className='container'>
        <Switch>
          <Route path="/" exact component={HomePage}  />
          <Route path="/cart" component={CartPage}/>
        </Switch>
        <ShoppingCartTable />
      </main>
    
    </div>
  );
}

export default App;