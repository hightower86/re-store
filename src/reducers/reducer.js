import updateBookList from './book-list-reducer.js';
import updateShoppingCart from './shopping-cart-reducer';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;