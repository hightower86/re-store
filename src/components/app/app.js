import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';

import './app.css';

function App() {
  
  return (
    <Switch>
      <Route path="/" exact component={HomePage}  />
      <Route path="/cart" component={CartPage}/>

    </Switch>
    
     
  );
}

export default App;