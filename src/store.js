import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import reducer from './reducers';

const logMiddleware = ({ getState }) => (dispatch) => (action) => {
  console.log(action.type, getState());
  return dispatch(action);
};
 
const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action
    });
  }
  return dispatch(action);
};
 


const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));

store.dispatch({type: 'STRING_RANDOM'});
export default store;