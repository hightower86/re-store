import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';

import './app.css';

function App() {
  
  return (
    <div>
      <h2>Header</h2>
      <Switch>
        <Route path="/" exact component={HomePage}  />
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </div>
  );
}

export default App;