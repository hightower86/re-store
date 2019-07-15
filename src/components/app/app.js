import React from 'react';
import { Goods } from '../pages';

import ErrorBoundry from '../error-boundry';

import './app.css';

function App() {
  return (
    <ErrorBoundry>
      <div className="App">
        <header className="App-header blue b">
          <h2>HEADER</h2>
        </header>
        <Goods />
      </div>
    </ErrorBoundry>
    
  );
}

export default App;
