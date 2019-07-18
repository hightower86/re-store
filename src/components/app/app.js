import React from 'react';
import { Goods } from '../pages';
import { BookstoreServiceProvider } from './../bookstore-service-context';
import ErrorBoundry from '../error-boundry';

import './app.css';

function App() {
  return (
    <ErrorBoundry>
      <BookstoreServiceProvider value={0}>
        <div className="App">
          <header className="App-header blue b">
            <h2>HEADER</h2>
          </header>
          <Goods />
        </div>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  );
}

export default App;
