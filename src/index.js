import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service'
import withBookstoreService from './components/hoc/with-bookstore-service';
import store from './store';
import 'tachyons';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));