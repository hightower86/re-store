import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';

import './app.css';

function App() {
  
  return (
    <div>
      <h2>Header</h2>
      <main role='main' className='container'>
        <Switch>
          <Route path="/" exact component={HomePage}  />
          <Route path="/cart" component={CartPage}/>
        </Switch>
      </main>
    
    </div>
  );
}

export default App;