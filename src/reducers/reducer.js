const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 350
};

const updateCartItems1 = (bookId, state, action) => {
  const { books, cartItems } = state;
  const book = books.find((book) => book.id === bookId);
  const idx = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[idx];
  const newItem = updateCartItem(book, item, action);

  if (idx === -1) {
    return [
      ...cartItems,
      newItem
    ]
  }
  if (action === 'delete' || newItem.count < 1) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ]
  }
  return [
    ...cartItems.slice(0, idx),
    newItem,
    ...cartItems.slice(idx + 1)
  ]
};

const updateCartItem = (book, item = {}, action) => {
  let { 
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 } = item;

    if (action === 'increase' || action === 'add') {
      count += 1;
      total += book.price;
    } else if (action === 'decrease') {
      count -= 1;
      total -= book.price;
    }

  return {
    id, 
    title, 
    count: count, 
    total: total
  };
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'BOOK_ADDED_TO_CART':
      return { 
        ...state,
        cartItems: updateCartItems1(action.payload, state, 'add')
      }; 

    case 'BOOK_INCREASED_IN_CART':

      return {
        ...state,
        cartItems: updateCartItems1(action.payload, state, 'increase')
      };
      
    case 'BOOK_DECREASED_IN_CART':
      return {
        ...state,
        cartItems: updateCartItems1(action.payload, state, 'decrease')
      };
      
    case 'BOOK_DELETED_IN_CART':
      return {
        ...state,
        cartItems: updateCartItems1(action.payload, state, 'delete')
      };
      
    default :
      return state;
  }
};
export default reducer;